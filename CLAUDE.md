# Portfolio — vmittestainer.dev

## Projeto
Portfolio de transição de carreira: CX Operations → Data Analyst.
Proprietário: Victor Mittestainer.
Site: `vmittestainer.github.io` (GitHub Pages, branch main, root /).

## Stack
- HTML / CSS / JS puro (sem framework)
- GitHub Pages para deploy
- i18n manual via `i18n.js` (EN padrão + toggle PT-BR)

## Estrutura de arquivos esperada
```
/
├── index.html
├── assets/
│   ├── css/main.css
│   ├── js/i18n.js
│   └── images/projects/
│       ├── project-sla.png
│       ├── project-cnpj.svg
│       ├── project-globe.svg
│       └── project-backup.svg
```

## Design Tokens obrigatórios (main.css)
- `--clr-accent: #00D4AA`
- `--clr-warm: #F59E0B`
- `--font-mono: JetBrains Mono`
- Escala de texto: mínimo 6 passos

## Seções do site
1. **Hero** — eyebrow "Data Analyst", H1, sub-headline, stats
2. **About** — 2 parágrafos, tom direto
3. **Stack** — Power BI · DAX · Power Query · SQL · Python (pandas) · Power Automate · Excel · Zabbix · Git
4. **Projects** — 4 cards (SLA Dashboard, CNPJ Matching, CO₂ Emissions Globe, Backup Monitoring)
5. **Experience** — timeline Wevy + ADS Uninter
6. **Contact**

## Projetos (cards)
| ID | Título | Tecnologia |
|----|--------|------------|
| sla | SLA Dashboard — Wevy/SKF | Power BI + Zabbix |
| cnpj | CNPJ Matching Pipeline | Python |
| globe | CO₂ Emissions Globe | JavaScript · Globe.gl · Our World in Data |
| backup | Backup Monitoring | Power BI + Zabbix |

## CO₂ Globe — detalhes técnicos
- Lib: Globe.gl (WebGL, standalone, sem framework)
- Dataset: Our World in Data — CO2 emissions por país/ano (CSV público)
- Interação: arrastar globo 3D, hover mostra país + toneladas, slider de ano (1990–2022)
- Arquivo: `assets/js/globe.js` (instancia Globe, carrega data, aplica heatmap)
- Data: `data/co2-by-country.json` (gerado a partir do CSV da Our World in Data)
- Resultado: globo 3D interativo com heatmap para 195 países

## Pipeline de sprints
| Sprint | Dias | Foco | Agentes |
|--------|------|------|---------|
| S1 | 1–5 | Fundação + copy | 1 + 2 |
| S2 | 6–12 | Build visual | 1 + 2 + 3 |
| S3 | 13–20 | Polish + micro-interações | 1 + 2 + 3 |
| S4 | 21–28 | SEO + performance + launch | 1 + 2 |

## Convenções de commit
- `feat(sN): descrição` — feature de sprint N
- `review(sN): validation complete` — revisão de sprint
- `fix: descrição` — correção

## Repo
`https://github.com/m1ttes1/vmittestainer.git`

## Idioma
Código em EN. Comentários e docs podem ser PT-BR.

## Regras de codificação (Karpathy)
1. **Pense antes de codar** — entenda o problema completo antes de abrir um arquivo
2. **Simplicidade primeiro** — a solução mais simples que funciona é a correta
3. **Mudanças cirúrgicas** — diff mínimo, não refatore o que não foi pedido
4. **Foco no objetivo** — não perca de vista o que o usuário pediu

## Skills instaladas neste projeto
- `impeccable` — design frontend production-grade (23 comandos)
- `web-design-guidelines` (Vercel) — audit UX/acessibilidade contra 100+ regras
- `writing-guidelines` (Vercel) — qualidade de copy
- `vercel-composition-patterns` — arquitetura de componentes
- `vercel-optimize` — performance
- `superpowers` — multi-agent, TDD, planos
- `caveman` — output compacto
