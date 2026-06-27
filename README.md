# vmittestainer · Portfolio

**Live →** [m1ttes1.github.io/vmittestainer.github.io](https://m1ttes1.github.io/vmittestainer.github.io/)

Seven years in operations — CX, IT support, team lead. The last four in the US. Now working in BI and data analysis. This portfolio shows the output, not a description of it.

No framework. No build step. HTML, CSS, vanilla JS — opens in any browser.

---

## Projects

**SLA Dashboard** · Power BI + Zabbix  
Cross-filtering KPI report built at work. Recurrence analysis for CPU, memory, and disk alerts — who, what, when, how often. 155-row synthetic dataset so it could be shared publicly.

**CNPJ Matching Pipeline** · Python + pandas  
Fuzzy match across multiple Excel files with inconsistent company name formatting. Three-hour manual process, now 8 minutes.

**IronForge** · Python + SQLite  
Ops data in a live SQLite DB — no read-only layer, no backup. Built a REST API in front of it and 4 analytical dashboards. Zero data loss.

**Backup Monitoring** · Power BI + Zabbix  
Backup failures were only discovered after the damage was done. Built proactive alerting. Zero undetected incidents in 6 months.

**CAGED Indústria SP** · SQL + DuckDB + Python  
Millions of rows of Brazilian employment microdata. Window functions and CTEs in DuckDB to find per-municipality recovery patterns in São Paulo manufacturing, 2021–2024.

---

## Stack

HTML · CSS · Vanilla JS · Chart.js · D3.js · GSAP · GitHub Pages

---

## Run locally

```bash
python -m http.server 8080
```

`fetch()` calls need a server — `file://` won't work.

---

Victor Mittestainer · [vmittestainer.dev@gmail.com](mailto:vmittestainer.dev@gmail.com)
