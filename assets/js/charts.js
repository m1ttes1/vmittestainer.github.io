(function () {
  'use strict';

  const ACCENT  = '#00D4AA';
  const WARM    = '#F59E0B';
  const MUTED   = '#9B9BAF';
  const GRID    = 'rgba(255,255,255,0.06)';
  const TIP_BG  = '#1E1E2E';

  const CAT_COLORS = [
    ACCENT,
    WARM,
    'rgba(0,212,170,0.55)',
    'rgba(245,158,11,0.55)',
    '#3A3A5A',
  ];

  const CHART_DEFAULTS = {
    animation: { duration: 600, easing: 'easeOutQuart' },
    plugins: {
      legend: { labels: { color: MUTED, font: { family: 'JetBrains Mono', size: 11 } } },
      tooltip: {
        backgroundColor: TIP_BG,
        borderColor: ACCENT,
        borderWidth: 1,
        titleColor: MUTED,
        bodyColor: '#E8E8F0',
      },
    },
  };

  const SCALE = {
    grid: { color: GRID },
    ticks: { color: MUTED, font: { family: 'JetBrains Mono', size: 11 } },
  };

  let rawRows = [];
  let charts  = { sla: null, donut: null, volume: null };

  const state = {
    period: '24m',
    client: 'all',
    drillCategory: null,
  };

  /* ── Helpers ────────────────────────────────── */
  function avg(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }
  function sum(arr) { return arr.reduce((a, b) => a + b, 0); }
  function pct(n, d) { return d === 0 ? 0 : (n / d) * 100; }
  function fmt(n) { return n.toLocaleString('en-US'); }
  function fmtPct(n) { return n.toFixed(1) + '%'; }

  function monthsBack(n) {
    const end = new Date('2024-12-01');
    const months = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(end);
      d.setMonth(d.getMonth() - i);
      months.push(d.toISOString().slice(0, 7));
    }
    return months;
  }

  function filteredRows() {
    const months = monthsBack(state.period === '24m' ? 24 : state.period === '12m' ? 12 : 6);
    return rawRows.filter(r =>
      months.includes(r.month) &&
      (state.client === 'all' || r.client === state.client)
    );
  }

  /* ── KPIs ───────────────────────────────────── */
  function updateKpis(rows) {
    const total    = sum(rows.map(r => r.tickets));
    const met      = sum(rows.map(r => r.sla_met));
    const fcr      = sum(rows.map(r => r.fcr));
    const reopened = sum(rows.map(r => r.reopened));
    const csats    = rows.flatMap(r => Array(r.tickets).fill(r.csat));

    document.getElementById('kpi-sla').textContent    = total ? fmtPct(pct(met, total)) : '—';
    document.getElementById('kpi-volume').textContent = fmt(total);
    document.getElementById('kpi-fcr').textContent    = total ? fmtPct(pct(fcr, total)) : '—';
    document.getElementById('kpi-reopen').textContent = total ? fmtPct(pct(reopened, total)) : '—';
    document.getElementById('kpi-csat').textContent   = csats.length ? avg(csats).toFixed(2) + '/5' : '—';
  }

  /* ── SLA line chart ─────────────────────────── */
  function buildSlaChart(rows) {
    const ctx = document.getElementById('chart-sla');
    if (!ctx) return;
    if (charts.sla) { charts.sla.destroy(); charts.sla = null; }

    const months = monthsBack(state.period === '24m' ? 24 : state.period === '12m' ? 12 : 6);
    const labels = months.map(m => {
      const [y, mo] = m.split('-');
      return new Date(+y, +mo - 1).toLocaleString('en', { month: 'short', year: '2-digit' });
    });

    const data = months.map(m => {
      const mrs = rows.filter(r => r.month === m);
      const t = sum(mrs.map(r => r.tickets));
      const s = sum(mrs.map(r => r.sla_met));
      return t ? +(pct(s, t).toFixed(1)) : null;
    });

    charts.sla = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'SLA %',
          data,
          borderColor: ACCENT,
          backgroundColor: 'rgba(0,212,170,0.08)',
          borderWidth: 2,
          pointBackgroundColor: ACCENT,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.35,
          fill: true,
          spanGaps: true,
        }],
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          x: { ...SCALE },
          y: { ...SCALE, min: 85, max: 100, ticks: { ...SCALE.ticks, callback: v => v + '%' } },
        },
        plugins: {
          ...CHART_DEFAULTS.plugins,
          legend: { display: false },
          title: { display: true, text: 'SLA % Over Time', color: '#E8E8F0', font: { family: 'JetBrains Mono', size: 13 }, padding: { bottom: 12 } },
        },
      },
    });
  }

  /* ── Donut with drill-down ──────────────────── */
  function buildDonutChart(rows) {
    const ctx = document.getElementById('chart-donut');
    if (!ctx) return;
    if (charts.donut) { charts.donut.destroy(); charts.donut = null; }

    let labels, data, title;

    if (state.drillCategory) {
      const sub = {};
      rows.filter(r => r.category === state.drillCategory).forEach(r => {
        sub[r.sub] = (sub[r.sub] || 0) + r.tickets;
      });
      labels = Object.keys(sub);
      data   = Object.values(sub);
      title  = state.drillCategory + ' — Subcategories';
    } else {
      const cats = {};
      rows.forEach(r => { cats[r.category] = (cats[r.category] || 0) + r.tickets; });
      labels = Object.keys(cats);
      data   = Object.values(cats);
      title  = 'Tickets by Category';
    }

    charts.donut = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data, backgroundColor: CAT_COLORS, borderColor: '#13131A', borderWidth: 2 }],
      },
      options: {
        ...CHART_DEFAULTS,
        cutout: '65%',
        plugins: {
          ...CHART_DEFAULTS.plugins,
          legend: { ...CHART_DEFAULTS.plugins.legend, position: 'bottom' },
          title: { display: true, text: title, color: '#E8E8F0', font: { family: 'JetBrains Mono', size: 13 }, padding: { bottom: 12 } },
        },
        onClick(_e, els) {
          if (!els.length) return;
          if (!state.drillCategory) {
            state.drillCategory = labels[els[0].index];
            renderAll();
            updateBreadcrumb();
          }
        },
      },
    });

    const wrap = ctx.closest('.demo__chart-wrap--drillable');
    if (wrap) wrap.title = state.drillCategory ? 'Click donut to drill further' : 'Click a slice to drill into subcategories';
  }

  /* ── Volume bar ─────────────────────────────── */
  function buildVolumeChart(rows) {
    const ctx = document.getElementById('chart-volume');
    if (!ctx) return;
    if (charts.volume) { charts.volume.destroy(); charts.volume = null; }

    const months = monthsBack(state.period === '24m' ? 24 : state.period === '12m' ? 12 : 6);
    const labels = months.map(m => {
      const [y, mo] = m.split('-');
      return new Date(+y, +mo - 1).toLocaleString('en', { month: 'short', year: '2-digit' });
    });
    const data = months.map(m => sum(rows.filter(r => r.month === m).map(r => r.tickets)));

    charts.volume = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Ticket Volume',
          data,
          backgroundColor: data.map((_, i) => i % 2 === 0 ? 'rgba(0,212,170,0.7)' : 'rgba(0,212,170,0.4)'),
          borderColor: ACCENT,
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        ...CHART_DEFAULTS,
        scales: { x: { ...SCALE }, y: { ...SCALE, beginAtZero: true } },
        plugins: {
          ...CHART_DEFAULTS.plugins,
          legend: { display: false },
          title: { display: true, text: 'Volume by Month', color: '#E8E8F0', font: { family: 'JetBrains Mono', size: 13 }, padding: { bottom: 12 } },
        },
      },
    });
  }

  /* ── Breadcrumb ─────────────────────────────── */
  function updateBreadcrumb() {
    const el = document.getElementById('drill-breadcrumb');
    if (!el) return;
    if (!state.drillCategory) {
      el.innerHTML = '';
      return;
    }
    el.innerHTML = `
      <button onclick="window.__demoReset()">All Categories</button>
      <span class="bc-sep">›</span>
      <span>${state.drillCategory}</span>
    `;
  }

  window.__demoReset = function () {
    state.drillCategory = null;
    renderAll();
    updateBreadcrumb();
  };

  /* ── Render all ─────────────────────────────── */
  function renderAll() {
    const rows = filteredRows();
    updateKpis(rows);
    buildSlaChart(rows);
    buildDonutChart(rows);
    buildVolumeChart(rows);
    if (window.__demoTree) window.__demoTree(rows);
  }

  /* ── Pill filter wiring ─────────────────────── */
  function wirePills(groupId, stateKey, resetDrill) {
    const group = document.getElementById(groupId);
    if (!group) return;
    group.addEventListener('click', e => {
      const pill = e.target.closest('.demo__pill');
      if (!pill) return;
      group.querySelectorAll('.demo__pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state[stateKey] = pill.dataset.value;
      if (resetDrill) { state.drillCategory = null; updateBreadcrumb(); }
      renderAll();
    });
  }

  /* ── Init ───────────────────────────────────── */
  function init() {
    if (typeof Chart === 'undefined') return;
    fetch('data/demo-data.json')
      .then(r => r.json())
      .then(data => {
        rawRows = data.rows;
        wirePills('filter-period', 'period', true);
        wirePills('filter-client', 'client', true);
        wirePills('filter-tree-dim', 'treeDim', false);
        renderAll();
      })
      .catch(() => {
        const s = document.getElementById('demo');
        if (s) s.style.display = 'none';
      });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
