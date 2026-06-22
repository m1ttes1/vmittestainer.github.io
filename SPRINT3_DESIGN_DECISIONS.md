# Sprint 3 — Design Decisions

## Dashboard Visual (section#demo)

### KPI Cards
- Added `transition: border-color` + `:hover { border-color: var(--clr-accent) }` — matches project card interaction pattern for visual consistency.
- `font-size` changed from `var(--text-xl)` (1.875rem) to `2rem` — gives the number more visual weight without breaking the grid.
- Label: `0.7rem`, `text-transform: uppercase`, `letter-spacing: 0.1em` — matches section-label pattern; reinforces the "data dashboard" aesthetic.

### Section Divider
- `<div class="section-divider">` placed between Projects and Demo sections.
- `background: linear-gradient(90deg, transparent, var(--clr-accent), transparent)` — creates a visual pause before the interactive demo without adding structural weight.

### Chart Refinements
- **Line chart**: `pointRadius: 0` → cleaner line; `pointHoverRadius: 5` → interaction feedback on demand.
- **Donut**: `legend.position: 'bottom'` → frees horizontal space; font already set to JetBrains Mono via CHART_DEFAULTS.
- **Bar chart**: `borderRadius: 4` was already applied in Sprint 2 — no change needed.

## Micro-Interactions

### Nav Logo Dot
- `.nav__logo span { display: inline-block; transition: transform 0.3s; }`
- `:hover span { transform: scale(1.4); }`
- Why: the dot is the only branded element in the nav; a subtle scale on hover rewards attention without distracting.

### CTA Button Glow
- `.hero__cta:hover { box-shadow: 0 0 24px rgba(0,212,170,0.25); }` — soft accent glow, 25% opacity to stay within the "accent ≤ 20% of visible elements" rule.

## Footer
- Restructured to two lines: stack + host info / copyright.
- Removed `.container` wrapper — footer is narrow content, full-width centering via CSS is sufficient.
- `font-size: 0.75rem` explicit (was `var(--text-xs)` which resolves to the same value — made explicit for clarity).

## Consistency Audit

1. **Accent color ≤ 20% of visible elements** — accent appears on: nav dot, section labels, stat values, KPI values, accent borders/indicators, CTA. All decorative or data-highlight use; no body text colored with accent. Estimate: ~12% of visible elements. ✓
2. **All cards same border-radius** — every card (project, stack group, KPI, chart wrap) uses `var(--radius-md)` = 12px. ✓
3. **No hardcoded text colors outside CSS variables** — all `color:` declarations in main.css use CSS variables. rgba shadow values are box-shadow decorations, not text colors. ✓
