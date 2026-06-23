(function () {
  'use strict';

  const ACCENT = '#00D4AA';
  const WARM   = '#F59E0B';
  const MUTED  = '#9B9BAF';
  const NODE_W = 130;
  const NODE_H = 64;
  const PAD    = { top: 30, right: 80, bottom: 30, left: 80 };
  const COL_W  = 200;

  let currentDim = 'category';
  let lastRows   = [];

  function aggregate(rows, dim) {
    const map = {};
    rows.forEach(r => {
      const key = r[dim];
      if (!map[key]) map[key] = { tickets: 0, sla_met: 0, children: {} };
      map[key].tickets += r.tickets;
      map[key].sla_met += r.sla_met;
      const sub = dim === 'category' ? r.client : r.category;
      if (!map[key].children[sub]) map[key].children[sub] = { tickets: 0, sla_met: 0 };
      map[key].children[sub].tickets += r.tickets;
      map[key].children[sub].sla_met += r.sla_met;
    });
    return map;
  }

  function buildHierarchy(rows, dim) {
    const agg   = aggregate(rows, dim);
    const total = rows.reduce((s, r) => s + r.tickets, 0);
    const met   = rows.reduce((s, r) => s + r.sla_met, 0);

    return {
      name: 'Total',
      value: total,
      sla: total ? (met / total * 100).toFixed(1) : '0',
      isRoot: true,
      children: Object.entries(agg)
        .sort((a, b) => b[1].tickets - a[1].tickets)
        .map(([name, d]) => ({
          name,
          value: d.tickets,
          sla: d.tickets ? (d.sla_met / d.tickets * 100).toFixed(1) : '0',
          pct: total ? (d.tickets / total * 100).toFixed(0) : '0',
          children: Object.entries(d.children)
            .sort((a, b) => b[1].tickets - a[1].tickets)
            .slice(0, 3)
            .map(([cname, cd]) => ({
              name: cname,
              value: cd.tickets,
              sla: cd.tickets ? (cd.sla_met / cd.tickets * 100).toFixed(1) : '0',
              pct: d.tickets ? (cd.tickets / d.tickets * 100).toFixed(0) : '0',
            })),
        })),
    };
  }

  function render(rows) {
    const container = document.getElementById('demo-tree');
    if (!container || typeof d3 === 'undefined') return;
    if (rows && rows.length) lastRows = rows;

    const root = d3.hierarchy(buildHierarchy(lastRows, currentDim));
    root.sort((a, b) => b.data.value - a.data.value);

    const leaves    = root.leaves().length;
    const rowH      = Math.max(NODE_H + 24, 88);
    const innerH    = Math.max(leaves * rowH, 320);
    const innerW    = 3 * COL_W;
    const svgW      = innerW + PAD.left + PAD.right;
    const svgH      = innerH + PAD.top  + PAD.bottom;

    container.innerHTML = '';

    const svg = d3.select(container)
      .append('svg')
      .attr('width', '100%')
      .attr('viewBox', `0 0 ${svgW} ${svgH}`)
      .attr('preserveAspectRatio', 'xMinYMid meet');

    const g = svg.append('g').attr('transform', `translate(${PAD.left},${PAD.top})`);

    const tree = d3.tree()
      .size([innerH, innerW])
      .separation((a, b) => a.parent === b.parent ? 1 : 1.4);

    tree(root);

    // Links
    g.selectAll('.tree-link')
      .data(root.links())
      .join('path')
      .attr('class', 'tree-link')
      .attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x));

    // Nodes
    const node = g.selectAll('.tree-node')
      .data(root.descendants())
      .join('g')
      .attr('class', d => 'tree-node' + (d.data.isRoot ? ' root' : ''))
      .attr('transform', d => `translate(${d.y},${d.x})`);

    node.append('rect')
      .attr('x', -NODE_W / 2)
      .attr('y', -NODE_H / 2)
      .attr('width', NODE_W)
      .attr('height', NODE_H)
      .attr('rx', 8);

    // Ticket count
    node.append('text')
      .attr('class', 'node-value')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', -10)
      .text(d => d.data.value.toLocaleString());

    // Name
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', 7)
      .attr('fill', '#E8E8F0')
      .attr('font-size', 11)
      .attr('font-family', 'JetBrains Mono, monospace')
      .text(d => d.data.name.length > 13 ? d.data.name.slice(0, 12) + '…' : d.data.name);

    // Pct + SLA
    node.append('text')
      .attr('class', 'node-pct')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', 22)
      .text(d => d.data.isRoot
        ? `SLA ${d.data.sla}%`
        : `${d.data.pct}% · SLA ${d.data.sla}%`);
  }

  // Wire dim toggle — re-renders on change
  document.addEventListener('DOMContentLoaded', () => {
    const group = document.getElementById('filter-tree-dim');
    if (!group) return;
    group.addEventListener('click', e => {
      const pill = e.target.closest('.demo__pill');
      if (!pill) return;
      group.querySelectorAll('.demo__pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentDim = pill.dataset.value;
      render(null);
    });
  });

  window.__demoTree = render;
})();
