(function () {
  'use strict';

  var COMMANDS = {
    help: function () { return [
      { text: 'Available commands:', cls: 'accent' },
      { text: '  whoami     — who is this guy' },
      { text: '  skills     — tech stack' },
      { text: '  projects   — work that shipped' },
      { text: '  hire       — how to reach me' },
      { text: '  ls         — site sections' },
      { text: '  ping       — you know why' },
      { text: '  clear      — clear terminal' },
      { text: '  exit       — close terminal' },
    ]; },

    whoami: function () { return [
      { text: 'Victor Mittestainer', cls: 'accent' },
      { text: 'Data Analyst @ Wevy · São Paulo, Brazil' },
      { text: '7 years in ops · 2+ in BI & data · English C2' },
      { text: 'Currently: building dashboards that make decisions defensible.' },
    ]; },

    skills: function () { return [
      { text: 'Advanced:     Power BI · DAX · Power Query · Excel', cls: 'accent' },
      { text: 'Intermediate: SQL · Python (pandas) · Power Automate · Git', cls: 'warm' },
      { text: 'Learning:     Tableau · dbt · Azure', cls: 'muted' },
    ]; },

    projects: function () { return [
      { text: 'Work that shipped:', cls: 'accent' },
      { text: '  [1] SLA Compliance Dashboard    Power BI + DAX — in daily use at Wevy' },
      { text: '  [2] CNPJ Matching Pipeline      Python — 3h process → 8 min' },
      { text: '  [3] CO₂ Emissions Globe         Globe.gl — 195 countries, drag to explore' },
      { text: '  [4] IronForge                   Flask + SQLite REST API + 4 dashboards' },
      { text: '  [5] Backup Monitoring           Power BI + Zabbix — 0 undetected incidents' },
      { text: '  [6] Workforce Attrition Analysis SQL + pandas — 3 attrition predictors from IBM HR data' },
      { text: '' },
      { text: "type 'hire' to start a conversation.", cls: 'muted' },
    ]; },

    hire: function () { return [
      { text: 'Open to Data Analyst and BI Developer roles.', cls: 'accent' },
      { text: '' },
      { text: '  email:    vmittestainer.dev@gmail.com' },
      { text: '  linkedin: linkedin.com/in/vmittestainer' },
      { text: '  github:   github.com/m1ttes1' },
      { text: '' },
      { text: 'Response time: usually same day.', cls: 'muted' },
    ]; },

    ls: function () { return [
      { text: 'about/   stack/   projects/   experience/   contact/', cls: 'accent' },
    ]; },

    ping: function () { return [
      { text: 'pong', cls: 'accent' },
    ]; },

    sudo: function () { return [
      { text: 'Permission denied.', cls: 'error' },
      { text: '(just email me — vmittestainer.dev@gmail.com)', cls: 'muted' },
    ]; },
  };

  var CLS_MAP = {
    accent: 'terminal-output--accent',
    warm:   'terminal-output--warm',
    muted:  'terminal-output--muted',
    error:  'terminal-output--error',
  };

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function appendOutput(body, lines) {
    lines.forEach(function (item) {
      var div = document.createElement('div');
      div.className = 'terminal-output' + (item.cls && CLS_MAP[item.cls] ? ' ' + CLS_MAP[item.cls] : '');
      div.textContent = item.text || '';
      body.appendChild(div);
    });
    body.scrollTop = body.scrollHeight;
  }

  function appendCmdLine(body, rawCmd) {
    var div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = '<span class="terminal-prompt">vm@portfolio:~$</span>'
      + '<span class="terminal-cmd">' + escapeHtml(rawCmd) + '</span>';
    body.appendChild(div);
  }

  function buildOverlay() {
    var el = document.createElement('div');
    el.id = 'terminal-overlay';
    el.className = 'terminal-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Terminal');
    el.innerHTML = [
      '<div class="terminal-window">',
        '<div class="terminal-titlebar">',
          '<span class="terminal-dot terminal-dot--close" id="term-close" title="close"></span>',
          '<span class="terminal-dot terminal-dot--min"></span>',
          '<span class="terminal-dot terminal-dot--max"></span>',
          '<span class="terminal-title">vm@portfolio — bash</span>',
          '<span class="terminal-hint">ESC or click outside to close · Ctrl+K to toggle</span>',
        '</div>',
        '<div class="terminal-body" id="terminal-body">',
          '<div class="terminal-output terminal-output--accent">vm terminal v1.0  —  type \'help\' for commands</div>',
          '<div class="terminal-output terminal-output--muted">─────────────────────────────────────────────────</div>',
        '</div>',
        '<div class="terminal-input-row">',
          '<span class="terminal-prompt">vm@portfolio:~$</span>',
          '<input id="terminal-input" class="terminal-input" type="text"',
          '       autocomplete="off" spellcheck="false" aria-label="Terminal command input" />',
        '</div>',
      '</div>',
    ].join('');
    document.body.appendChild(el);
    return el;
  }

  function openTerminal(overlay, input) {
    overlay.classList.add('open');
    requestAnimationFrame(function () { input.focus(); });
  }

  function closeTerminal(overlay, returnFocus) {
    overlay.classList.remove('open');
    if (returnFocus) returnFocus.focus();
  }

  function initTerminal() {
    var logo = document.querySelector('.nav__logo');
    if (!logo) return;

    var overlay  = buildOverlay();
    var body     = document.getElementById('terminal-body');
    var input    = document.getElementById('terminal-input');
    var closeBtn = document.getElementById('term-close');

    logo.setAttribute('title', "Open terminal (Ctrl+K)");

    logo.addEventListener('click', function () { openTerminal(overlay, input); });

    closeBtn.addEventListener('click', function () { closeTerminal(overlay, logo); });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeTerminal(overlay, logo);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (overlay.classList.contains('open')) closeTerminal(overlay, logo);
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        overlay.classList.contains('open')
          ? closeTerminal(overlay, logo)
          : openTerminal(overlay, input);
      }
    });

    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      var raw = input.value.trim();
      input.value = '';
      if (!raw) return;

      var cmd = raw.toLowerCase();
      appendCmdLine(body, raw);

      if (cmd === 'clear') { body.innerHTML = ''; return; }
      if (cmd === 'exit')  { closeTerminal(overlay, logo); return; }

      var fn = COMMANDS[cmd];
      if (fn) {
        appendOutput(body, fn());
      } else {
        appendOutput(body, [
          { text: 'command not found: ' + raw, cls: 'error' },
          { text: "type 'help' for available commands.", cls: 'muted' },
        ]);
      }

      appendOutput(body, [{ text: '' }]);
    });
  }

  document.addEventListener('DOMContentLoaded', initTerminal);
})();
