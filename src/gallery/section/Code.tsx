const snippet = `export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return { theme, setTheme }
}`

export default function CodeSection() {
  return (
    <section>
      <h2 className="text-heading">Code</h2>
      <pre className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface-2 p-5 font-mono text-small leading-relaxed">
        <code>{snippet}</code>
      </pre>
    </section>
  )
}
