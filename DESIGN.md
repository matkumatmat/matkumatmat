# DESIGN.md

Design spec for this portfolio. One navy, one lime, two themes, zero hardcodes.

## Identity

Navy `#054082` carries structure: headers, buttons, text on light. Lime `#B8D600` is the single accent and only lands on key moments: highlights, the hero panel, active states. Everything else is warm neutrals, paper `#f4f4f0` on light and near-black `#0c0a09` on dark.

Type is Google Sans Flex for prose and Google Sans Code for mono. Both are variable fonts, loaded locally, no webfont request at runtime.

## Dials

- **ENERGY 2.** Confident but not loud. One big headline per screen, then quiet body text.
- **RHYTHM 2.** Mostly consistent sections with a few breaks: the split-color hero and the timeline bento keep it from going flat.
- **MOTION 2.** Scroll reveals and one choreographed hero loop. Nothing moves without a reason, and everything respects reduced motion.

## Tokens

Source of truth is `src/index.css`. The gallery at `/gallery` renders these same values live.

| Token | Light | Dark | Class |
| --- | --- | --- | --- |
| `--canvas` | `#f4f4f0` | `#0c0a09` | `bg-canvas` |
| `--surface` | `#ffffff` | `#1a1817` | `bg-surface` |
| `--surface-2` | `#fafaf7` | `#232120` | `bg-surface-2` |
| `--fg` | `#0c0a09` | `#f4f4f0` | `text-fg` |
| `--fg-muted` | `#6b675e` | `#9b978e` | `text-fg-muted` |
| `--line` | `#e3e0d6` | `#2f2c29` | `border-line` |
| `--brand` | `#054082` | `#0a4a99` | `bg-brand` |
| `--brand-text` | `#054082` | `#7fa8e6` | `text-brand-text` |
| `--brand-fg` | `#f4f4f0` | `#f4f4f0` | `text-brand-fg` |
| `--accent` | `#b8d600` | `#b8d600` | `bg-accent` |
| `--accent-text` | `#566b00` | `#b8d600` | `text-accent-text` |
| `--accent-fg` | `#0c0a09` | `#0c0a09` | `text-accent-fg` |

Companion text colors (`-text`, `-fg`) exist so text stays readable on every fill in both themes. Never put `--fg` on `--accent` directly, use `--accent-fg`.

## Type scale

| Step | Value | Weight | Leading | Tracking |
| --- | --- | --- | --- | --- |
| `display` | `clamp(2.75rem, 1.5rem + 5vw, 6rem)` | 800 | 0.95 | -0.04em |
| `title` | `clamp(2rem, 1.3rem + 2.8vw, 3.25rem)` | 700 | 1.05 | -0.03em |
| `heading` | `clamp(1.5rem, 1.2rem + 1.4vw, 2rem)` | 700 | 1.15 | -0.02em |
| `subheading` | `1.25rem` | 600 | 1.3 | -0.01em |
| `body` | `1rem` | 400 | 1.6 | - |
| `small` | `0.875rem` | 400 | 1.5 | - |
| `label` | `0.75rem` | 600 | 1.2 | +0.08em |

The top three steps are fluid. `display` pairs with tight tracking, `label` is always uppercase with wide tracking.

## Shape

Radius comes from the Tailwind default scale, not custom tokens:

- `rounded-full` for buttons, pills, badges
- `rounded-2xl` for cards and the hero
- `rounded-xl` for nested panels
- `rounded-md` for small controls

## Reuse

Paste this block into your own CSS, then bridge it into Tailwind v4:

```css
:root {
  color-scheme: light;

  --canvas: #f4f4f0;
  --surface: #ffffff;
  --surface-2: #fafaf7;
  --fg: #0c0a09;
  --fg-muted: #6b675e;
  --line: #e3e0d6;

  --brand: #054082;
  --brand-text: #054082;
  --brand-fg: #f4f4f0;

  --accent: #b8d600;
  --accent-text: #566b00;
  --accent-fg: #0c0a09;
}

.dark {
  color-scheme: dark;

  --canvas: #0c0a09;
  --surface: #1a1817;
  --surface-2: #232120;
  --fg: #f4f4f0;
  --fg-muted: #9b978e;
  --line: #2f2c29;

  --brand: #0a4a99;
  --brand-text: #7fa8e6;
  --brand-fg: #f4f4f0;

  --accent: #b8d600;
  --accent-text: #b8d600;
  --accent-fg: #0c0a09;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-fg: var(--fg);
  --color-fg-muted: var(--fg-muted);
  --color-line: var(--line);

  --color-brand: var(--brand);
  --color-brand-text: var(--brand-text);
  --color-brand-fg: var(--brand-fg);

  --color-accent: var(--accent);
  --color-accent-text: var(--accent-text);
  --color-accent-fg: var(--accent-fg);
}
```

Then:

1. Toggle the `dark` class on `<html>` to switch themes.
2. Use the classes (`bg-brand`, `text-fg-muted`) instead of raw hex.
3. Keep the accent rare. If it appears more than twice per screen, remove one.
