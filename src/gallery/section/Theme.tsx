import { useTheme } from '../../theme'
import { palette } from '../palette'

export default function ThemeSection() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section id="theme">
      <h2 className="text-heading">Theme</h2>
      <p className="text-body text-fg-muted mt-3 max-w-xl">
        Light is the default. Dark overrides the same variables through a{' '}
        <code className="font-mono text-small">.dark</code> class on{' '}
        <code className="font-mono text-small">{'<html>'}</code>. Try it live,
        this whole page follows.
      </p>
      <button
        type="button"
        onClick={toggleTheme}
        className="mt-6 rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-opacity hover:opacity-90"
      >
        Switch to {theme === 'dark' ? 'light' : 'dark'} (now {theme})
      </button>
      <div className="mt-6 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-md text-left text-small">
          <thead>
            <tr className="border-b border-line bg-surface-2">
              <th className="px-4 py-3 font-semibold">Token</th>
              <th className="px-4 py-3 font-semibold">Light</th>
              <th className="px-4 py-3 font-semibold">Dark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-surface">
            {palette.map((color) => (
              <tr key={color.token}>
                <td className="px-4 py-2.5 font-mono">{color.token}</td>
                <td className="px-4 py-2.5">
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-block h-4 w-4 rounded-full border border-line"
                      style={{ backgroundColor: color.light }}
                    />
                    <span className="font-mono">{color.light}</span>
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-block h-4 w-4 rounded-full border border-line"
                      style={{ backgroundColor: color.dark }}
                    />
                    <span className="font-mono">{color.dark}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
