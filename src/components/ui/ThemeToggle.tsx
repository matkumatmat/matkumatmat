import { useTheme } from '../../theme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'terang' : 'gelap'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Ganti ke tema ${next}`}
      className="rounded-full border border-line bg-surface px-4 py-2 text-small transition-colors hover:border-brand-text hover:text-brand-text"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
