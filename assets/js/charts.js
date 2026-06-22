(function () {
  'use strict';

  const ACCENT  = '#00D4AA';
  const WARM    = '#F59E0B';
  const MUTED   = '#9B9BAF';
  const GRID    = 'rgba(255,255,255,0.06)';
  const TIP_BG  = '#1E1E2E';

  const CHART_DEFAULTS = {
    animation: { duration: 800, easing: 'easeOutQuart' },
    plugins: {
      legend: { labels: { color: MUTED, font: { family: 'JetBrains Mono' } } },
      tooltip: {
        backgroundColor: TIP_BG,
        borderColor: ACCENT,
        borderWidth: 1,
        titleColor: MUTED,
        bodyColor: '#E8E8F0',
      },
    },
  };

  const SCALE_DEFAULTS = {
    grid: { color: GRID },
    ticks: { color: MUTED, font: { family: 'JetBrains Mono', size: 11 } },
  };

  let chartSla    = null;
  let chartDonut  = null;
  let chartVolume = null;
  let rawData     = null;

  function avg(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  function slice(filter) {
    if (!rawData) return null;
    const ranges = { all: [0, 12], q1: [0, 3], q2: [3, 6] };
    const [s, e] = ranges[filter] || ranges.all;
    return {
      months:     rawData.months.slice(s, e),
      sla:        rawData.sla.slice(s, e),
      volume:     rawData.volume.slice(s, e),
      csat:       rawData.csat.slice(s, e),
      categories: rawData.categories,
    };
  }

  function updateKpis(d) {
    document.getElementById('kpi-sla').textContent    = avg(d.sla).toFixed(1) + '%';
    document.getElementById('kpi-volume').textContent = fmt(sum(d.volume));
    document.getElementById('kpi-csat').textContent   = avg(d.csat).toFixed(2) + '/5';
  }

  function buildSlaChart(d) {
    const ctx = document.getElementById('chart-sla');
    if (!ctx) return;
    if (chartSla) { chartSla.destroy(); chartSla = null; }

    chartSla = new Chart(ctx, {
      type: 'line',
      data: {
        labels: d.months,
        datasets: [{
          label: 'SLA %',
          data: d.sla,
          borderColor: ACCENT,
          backgroundColor: 'rgba(0,212,170,0.08)',
          borderWidth: 2,
          pointBackgroundColor: ACCENT,
          pointRadius: 4,
          tension: 0.35,
          fill: true,
        }],
      },
      options: {
        ...CHART_DEFAULTS,
        backgroundColor: 'transparent',
        scales: {
          x: { ...SCALE_DEFAULTS },
          y: {
            ...SCALE_DEFAULTS,
            min: 88,
            max: 100,
            ticks: { ...SCALE_DEFAULTS.ticks, callback: v => v + '%' },
          },
        },
        plugins: {
          ...CHART_DEFAULTS.plugins,
          legend: { display: false },
          title: {
            display: true,
            text: 'SLA Over Time',
            color: '#E8E8F0',
            font: { family: 'JetBrains Mono', size: 13 },
            padding: { bottom: 12 },
          },
        },
      },
    });
  }

  function buildDonutChart(d) {
    const ctx = document.getElementById('chart-donut');
    if (!ctx) return;
    if (chartDonut) { chartDonut.destroy(); chartDonut = null; }

    chartDonut = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: d.categories.labels,
        datasets: [{
          data: d.categories.data,
          backgroundColor: [
            ACCENT,
            WARM,
            'rgba(0,212,170,0.45)',
            'rgba(245,158,11,0.45)',
            '#3A3A5A',
          ],
          borderColor: '#13131A',
          borderWidth: 2,
        }],
      },
      options: {
        ...CHART_DEFAULTS,
        cutout: '68%',
        plugins: {
          ...CHART_DEFAULTS.plugins,
          title: {
            display: true,
            text: 'Ticket Categories',
            color: '#E8E8F0',
            font: { family: 'JetBrains Mono', size: 13 },
            padding: { bottom: 12 },
          },
        },
      },
    });
  }

  function buildVolumeChart(d) {
    const ctx = document.getElementById('chart-volume');
    if (!ctx) return;
    if (chartVolume) { chartVolume.destroy(); chartVolume = null; }

    chartVolume = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: d.months,
        datasets: [{
          label: 'Ticket Volume',
          data: d.volume,
          backgroundColor: d.volume.map((_, i) =>
            i % 2 === 0 ? 'rgba(0,212,170,0.7)' : 'rgba(0,212,170,0.45)'
          ),
          borderColor: ACCENT,
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        ...CHART_DEFAULTS,
        backgroundColor: 'transparent',
        scales: {
          x: { ...SCALE_DEFAULTS },
          y: { ...SCALE_DEFAULTS, beginAtZero: true },
        },
        plugins: {
          ...CHART_DEFAULTS.plugins,
          legend: { display: false },
          title: {
            display: true,
            text: 'Volume by Month',
            color: '#E8E8F0',
            font: { family: 'JetBrains Mono', size: 13 },
            padding: { bottom: 12 },
          },
        },
      },
    });
  }

  function renderCharts(filter) {
    const d = slice(filter);
    if (!d) return;
    updateKpis(d);
    buildSlaChart(d);
    buildDonutChart(d);
    buildVolumeChart(d);
  }

  function initDemoFilter() {
    const select = document.getElementById('demo-filter');
    if (!select) return;
    select.addEventListener('change', () => renderCharts(select.value));
  }

  function initCharts() {
    if (typeof Chart === 'undefined') return;

    fetch('data/demo-data.json')
      .then(r => r.json())
      .then(data => {
        rawData = data;
        renderCharts('all');
        initDemoFilter();
      })
      .catch(() => {
        const section = document.getElementById('demo');
        if (section) section.style.display = 'none';
      });
  }

  document.addEventListener('DOMContentLoaded', initCharts);
})();
