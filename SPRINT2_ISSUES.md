# Sprint 2 — Responsive & Functional Review

## Status: APROVADO (com fixes aplicados)

---

## Bugs encontrados e corrigidos

### BUG-01 · Hero H1 perde quebra de linha [CORRIGIDO]
**Severidade:** Alta  
**Causa:** `applyTranslations()` usa `el.textContent = text`, que remove o `<br>` do HTML original. O `\n` na string colapsa para espaço em HTML normal — título renderiza em linha única.  
**Fix:** Adicionado `white-space: pre-line` ao `.hero__h1` em `main.css`. O `\n` na string textContent agora renderiza como quebra de linha, compatível com o estado pré-tradução (que usa `<br>`).

### BUG-02 · Counter animation ausente [CORRIGIDO]
**Severidade:** Média  
**Causa:** `main.js` não tinha lógica de animação — stats (7+, 4, 40%) eram estáticos.  
**Fix:** Adicionado `animateCounters()` com `IntersectionObserver` + easing cúbico em `main.js`. Dispara quando `.hero__stats` entra em viewport (threshold 0.5).

### BUG-03 · Nav sem `aria-label` [CORRIGIDO]
**Severidade:** Média (acessibilidade)  
**Causa:** `<nav class="nav" id="main-nav">` sem atributo `aria-label`.  
**Fix:** Adicionado `aria-label="Main navigation"` ao elemento `<nav>` em `index.html`.

### BUG-04 · Contact buttons não formam coluna no mobile [CORRIGIDO]
**Severidade:** Baixa  
**Causa:** `.contact__links` usa `flex-wrap: wrap` mas sem `flex-direction: column` no breakpoint `≤768px` — botões ficam em 2+1 no mobile.  
**Fix:** Adicionado `flex-direction: column; align-items: center` ao `.contact__links` dentro do `@media (max-width: 768px)` em `main.css`.

### BUG-05 · Profile image 404 [PENDENTE — requer asset]
**Severidade:** Baixa (degradação graciosa via onerror)  
**Causa:** `assets/images/profile/victor-profile.jpg` não existe — diretório `profile/` estava ausente.  
**Ação:** Diretório `assets/images/profile/` criado. Arquivo `victor-profile.jpg` deve ser adicionado manualmente pelo Victor.  
**Estado atual:** Fallback `VM` placeholder ativo — visual não quebrado, mas console gera 404.

---

## Checklist de validação

### Responsividade 375px (mobile)
- [x] Nav: hamburger aparece, links somem
- [x] Hero: título não transborda (`clamp()` + grid 1col)
- [x] Stack: 1 coluna via `grid-template-columns: 1fr`
- [x] Project cards: 1 coluna via `grid-template-columns: 1fr`
- [x] Contact buttons: coluna única (CORRIGIDO — fix BUG-04)

### Responsividade 768px (tablet)
- [x] Transição suave — breakpoint único em 768px, sem conflitos

### Responsividade 1440px (desktop)
- [x] Projects grid: `repeat(auto-fit, minmax(340px, 1fr))` — ~3 cards por linha em 1100px container
- [x] About: 2 colunas (`3fr 2fr`)
- [x] Nav horizontal, hamburger oculto

### Funcionalidade
- [x] Language toggle EN→PT: i18n.js cobre todas as seções com `data-i18n`
- [x] Toggle PT→EN: toggle bidirecional funcional
- [x] Nav smooth scroll: `html { scroll-behavior: smooth }` + hrefs com `#anchor`
- [x] Counter animation: CORRIGIDO — adicionado em main.js (BUG-02)
- [x] Hover cards: `border-color: accent` + `translateY(-4px)` no CSS
- [x] Nav escurece ao scroll: `.nav--scrolled` via `window.addEventListener('scroll')`

### Código
- [x] Zero erros JS esperados — sem referências nulas, globe.js tem guard `typeof Globe === 'undefined'`
- [~] 404 em `assets/images/profile/victor-profile.jpg` — diretório criado, arquivo pendente
- [x] Demais assets existem: `project-sla.png`, `project-cnpj.svg`, `project-backup.svg`, `project-ironforge.png`

### Acessibilidade
- [x] Todas imagens com `alt` descritivo
- [x] `aria-label="Main navigation"` no `<nav>` (CORRIGIDO — BUG-03)
- [x] Contraste `#8888A8` sobre `#0A0A0F` ≈ 5.82:1 — passa WCAG AA (mín 4.5:1)
- [x] Hamburger tem `aria-label="Menu"`

---

## Para o Agente 3

- Adicionar `victor-profile.jpg` em `assets/images/profile/` (Victor precisa fornecer foto)
- CO₂ Globe card usa WebGL preview inline — avaliar se implementação completa do globo (`globe.js`) está integrada ou se precisa de página dedicada
- Verificar loading performance: `globe.gl` via CDN sem `defer` pode bloquear render
