// caged-chart.js — CAGED SP Employment Trend visualization
// Loaded by index.html, renders into #caged-chart-container

(function () {
  const ACCENT = '#00D4AA';
  const WARM   = '#F59E0B';
  const MUTED  = '#64748B';
  const COLORS = [ACCENT, WARM, '#818CF8', '#FB7185', '#34D399'];

  async function initCagedChart() {
    const container = document.getElementById('caged-chart-container');
    if (!container) return;

    try {
      const res  = await fetch('data/caged-sp-municipios.json');
      const data = await res.json();
      renderChart(container, data);
    } catch (err) {
      container.innerHTML = '<p class="mono muted" style="text-align:center;padding:2rem;">Dados não disponíveis</p>';
    }
  }

  function renderChart(container, data) {
    // Controls
    const controls = document.createElement('div');
    controls.className = 'caged-controls';
    controls.innerHTML = `
      <select id="caged-metric" class="caged-select mono">
        <option value="saldo">Saldo de Empregos</option>
        <option value="admissoes">Admissões</option>
        <option value="desligamentos">Desligamentos</option>
      </select>
      <span class="caged-meta mono muted">${data.meta.fonte} · ${data.meta.periodo}</span>
    `;
    container.appendChild(controls);

    // Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'caged-canvas';
    canvas.style.cssText = 'width:100%;max-height:320px;';
    container.appendChild(canvas);

    const municipios = data.municipios.slice(0, 5);
    const labels     = municipios[0].serie.map(s => s.competencia);

    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: municipios.map((mun, i) => ({
          label:           mun.nome,
          data:            mun.serie.map(s => s.saldo),
          borderColor:     COLORS[i % COLORS.length],
          backgroundColor: COLORS[i % COLORS.length] + '22',
          borderWidth:     2,
          pointRadius:     0,
          tension:         0.4,
          fill:            false,
        })),
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'bottom', labels: { color: '#94A3B8', font: { family: 'JetBrains Mono', size: 11 } } },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y > 0 ? '+' : ''}${ctx.parsed.y.toLocaleString('pt-BR')}`,
            },
          },
        },
        scales: {
          x: { ticks: { color: MUTED, maxTicksLimit: 8 }, grid: { color: '#1E293B' } },
          y: {
            ticks: {
              color: MUTED,
              callback: v => (v >= 0 ? '+' : '') + v.toLocaleString('pt-BR'),
            },
            grid: { color: '#1E293B' },
          },
        },
      },
    });

    // Metric toggle
    document.getElementById('caged-metric').addEventListener('change', function () {
      const metric = this.value;
      municipios.forEach((mun, i) => {
        chart.data.datasets[i].data = mun.serie.map(s => s[metric]);
      });
      chart.update();
    });
  }

  document.addEventListener('DOMContentLoaded', initCagedChart);
})();
