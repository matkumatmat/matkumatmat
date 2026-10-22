import { useState, type ReactNode } from 'react'
import designMd from '../../../DESIGN.md?raw'

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-line bg-surface px-4 py-2 text-small transition-colors hover:border-brand-text hover:text-brand-text"
    >
      {copied ? 'Copied' : label}
    </button>
  )
}

type Block =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'code'; lang: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][] }

function splitCells(row: string): string[] {
  return row
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((cell) => cell.trim())
}

function isDivider(row: string): boolean {
  return /^\|?[\s:|-]+\|?$/.test(row) && row.includes('-')
}

function parseBlocks(source: string): Block[] {
  const lines = source.split('\n')
  const blocks: Block[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') {
      i += 1
      continue
    }

    const fence = line.match(/^```(\w*)\s*$/)
    if (fence) {
      const code: string[] = []
      i += 1
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i])
        i += 1
      }
      i += 1
      blocks.push({ type: 'code', lang: fence[1], text: code.join('\n') })
      continue
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/)
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] })
      i += 1
      continue
    }

    if (line.includes('|') && i + 1 < lines.length && isDivider(lines[i + 1])) {
      const head = splitCells(line)
      const rows: string[][] = []
      i += 2
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitCells(lines[i]))
        i += 1
      }
      blocks.push({ type: 'table', head, rows })
      continue
    }

    if (/^(\s*[-*]|\s*\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\./.test(line)
      const items: string[] = []
      while (i < lines.length && /^(\s*[-*]|\s*\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*[-*]|\s*\d+\.)\s+/, ''))
        i += 1
      }
      blocks.push({ type: 'list', ordered, items })
      continue
    }

    const paragraph: string[] = [line]
    i += 1
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('```') &&
      !/^(\s*[-*]|\s*\d+\.)\s+/.test(lines[i])
    ) {
      paragraph.push(lines[i])
      i += 1
    }
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
  }

  return blocks
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`
    const bold = part.match(/^\*\*(.+)\*\*$/)
    if (bold) {
      return (
        <strong key={key} className="font-semibold">
          {bold[1]}
        </strong>
      )
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={key} className="rounded bg-surface-2 px-1 font-mono text-small">
          {part.slice(1, -1)}
        </code>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <a
          key={key}
          href={link[2]}
          target={link[2].startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-brand-text"
        >
          {link[1]}
        </a>
      )
    }
    return <span key={key}>{part}</span>
  })
}

function renderBlock(block: Block, index: number): ReactNode {
  switch (block.type) {
    case 'heading':
      if (block.level === 1) {
        return (
          <h2 key={index} className="text-heading mt-10 first:mt-0">
            {renderInline(block.text, `h${index}`)}
          </h2>
        )
      }
      return (
        <h3 key={index} className="text-subheading mt-8 first:mt-0">
          {renderInline(block.text, `h${index}`)}
        </h3>
      )
    case 'paragraph':
      return (
        <p key={index} className="text-body mt-4 max-w-3xl">
          {renderInline(block.text, `p${index}`)}
        </p>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          key={index}
          className={`text-body mt-4 max-w-3xl space-y-2 pl-6 ${
            block.ordered ? 'list-decimal' : 'list-disc'
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item, `li${index}-${i}`)}</li>
          ))}
        </Tag>
      )
    }
    case 'code':
      return (
        <div key={index} className="mt-4 overflow-x-auto rounded-xl border border-line bg-surface-2">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-2">
            <p className="font-mono text-small text-fg-muted">{block.lang || 'code'}</p>
            <CopyButton text={block.text} label="Copy block" />
          </div>
          <pre className="p-5 font-mono text-small leading-relaxed">
            <code>{block.text}</code>
          </pre>
        </div>
      )
    case 'table':
      return (
        <div key={index} className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-xl text-left text-small">
            <thead>
              <tr className="border-b border-line bg-surface-2">
                {block.head.map((cell, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {renderInline(cell, `th${index}-${i}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-surface">
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-2.5 font-mono">
                      {renderInline(cell, `td${index}-${r}-${c}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default function DesignDoc() {
  return (
    <section id="design">
      <p className="text-label uppercase text-accent-text">Spec</p>
      <h2 className="text-heading mt-3">DESIGN.md</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        The full design spec, rendered live from the repo file. What you read
        here is what ships.
      </p>
      <div className="mt-4">
        <CopyButton text={designMd} label="Copy DESIGN.md" />
      </div>
      <div className="mt-2">{parseBlocks(designMd).map(renderBlock)}</div>
    </section>
  )
}
