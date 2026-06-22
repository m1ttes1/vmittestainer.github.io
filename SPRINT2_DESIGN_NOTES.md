# Sprint 2 — Design Agent Notes

## Typography

### Project card titles → 1.1rem
Changed `.project-card__title` from `var(--text-base)` (1rem) to `1.1rem`.
Creates clear hierarchy: card title sits between body text (1rem) and section titles (1.25rem+).

### Hero H1 letter-spacing (confirmed)
`letter-spacing: -0.02em` already present. Large display titles optically tighten with negative tracking.

### Section labels letter-spacing (confirmed)
`letter-spacing: 0.15em` on `.section-label` already present. Mono uppercase at 12px needs generous tracking to read well at small sizes.

---

## Spacing

### Hero stats gap → 3rem
Changed from `2.5rem` to `3rem`. Three stat items need breathing room — too tight previously.

### Section padding (confirmed)
`section { padding-block: 6rem }` already in place. `var(--space-24)` equivalent.

### Card body padding (confirmed)
`.project-card__body { padding: 1.25rem }` already correct.

---

## Signature Details

### Hero — 4 decorative dots
Four `<span class="hero__dot">` elements added inside `.hero`, positioned via inline style.
Size: 4×4px, border-radius 50%, accent color, opacity 0.25.
Positions: 20%/15%, 35%/25%, 60%/10%, 75%/30% (top/right).
Purpose: adds life to the large empty right-hand space without competing with content.

### Stack group hover glow
Added `border-color: var(--clr-accent)` + `box-shadow: 0 0 0 1px var(--clr-accent)` on `.stack__group:hover`.
The double-border illusion (1px border + 1px box-shadow) creates a subtle glow without changing layout.

### Project card border-top accent on hover only
Normal state: `border-top: 2px solid transparent`. On hover: `border-top-color: var(--clr-accent)` via `transition: border-top-color 0.3s`.
Removed the global `border-color: var(--clr-accent)` from hover — cleaner, more deliberate signal.

### Timeline current dot pulse
`.timeline-item.current::after` adds a pulsing ring around the active dot.
Animation scales from 1× to 1.6× and fades opacity 0.3→0, looping every 2s.
`translateX(-8px)` included in keyframes to keep it centered over the timeline line throughout the animation.

---

## Consistency Audit

### border-radius
`--radius-md: 12px` used for all cards (project-card, about__card, stack__group).
`--radius-sm: 6px` used for small elements (buttons, tags, links). Pattern is consistent — no changes needed.

### Accent color saturation
Accent appears as: logo dot, nav underlines (hover only), hero eyebrow, stat values, section labels, stack advanced label, card tech labels, card links, timeline bar, current dot. Usage is structurally motivated (labels, active states, data highlights) — not decorative overuse. Within ~20% threshold for structural roles.

### Muted text token
Codebase uses `--clr-text-muted` throughout (equivalent to `--clr-text-2`). All secondary text references this token consistently.

---

## Pending (for Agente 1 — topic 3.2)
- BUG-05: `assets/images/profile/victor-profile.jpg` still missing — Victor needs to provide photo
- Globe CDN script loaded without `defer` — may block render; assess in perf sprint
