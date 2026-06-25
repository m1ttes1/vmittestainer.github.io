const translations = {
  en: {
    /* NAV */
    'nav.about':      'About',
    'nav.stack':      'Stack',
    'nav.projects':   'Projects',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',
    'nav.lang':       'PT',

    /* HERO */
    'hero.eyebrow':     'Data Analyst',
    'hero.h1':          'Turning support noise\ninto data clarity.',
    'hero.sub':         '7 years in operations — 4 of them in the US.',
    'hero.stat1.value': '2+',
    'hero.stat1.label': 'Years in BI & Data',
    'hero.stat2.value': '5',
    'hero.stat2.label': 'Projects Shipped',
    'hero.stat3.value': '40%',
    'hero.stat3.label': 'SLA breach reduction',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact':  'Get in touch',

    /* ABOUT */
    'about.label':      'About',
    'about.title':      'Operations background. Data mindset.',
    'about.p1':         'Seven years in operations — four running service and logistics in Boston and San Diego, then back to Brazil joining Wevy as a CX & Data Analyst. At Wevy, I migrated manual Excel controls to ETL/ELT pipelines in Power Query, built self-service Power BI dashboards for industrial clients (SKF-tier), and automated workflows between Zoho CRM and SharePoint via Power Automate.',
    'about.p2':         'I understand the business before I open Power BI. English C2 — five years in Boston and San Diego. Currently completing a B.S. in Systems Analysis & Development at Uninter (2024–2026).',
    'about.card.title': 'Currently focusing on',

    /* STACK */
    'stack.label':              'Tech Stack',
    'stack.title':              'Tools I work with.',
    'stack.group.advanced':     'Advanced',
    'stack.group.intermediate': 'Intermediate',
    'stack.group.learning':     'Learning',

    /* PROJECTS */
    'projects.label':   'Projects',
    'projects.title':   'Work that shipped.',
    'project.problem':  'Problem',
    'project.result':   'Result',

    'project.sla.title':    'SLA Compliance Dashboard',
    'project.sla.tech':     'Power BI · DAX',
    'project.sla.problem':  'CX team tracked ticket recurrence manually via Excel exports — no per-client view, name inconsistencies broke analysis.',
    'project.sla.result':   'Full self-service BI in daily use: recurrence auto-calculated via DAX with name normalization, 40% faster violation response.',

    'project.cnpj.title':   'CNPJ Matching Pipeline',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciling CNPJs across multiple Excel files — error-prone and manual.',
    'project.cnpj.result':  '3-hour process reduced to 8 minutes.',

    'project.globe.title':   'CO₂ Emissions Globe',
    'project.globe.tech':    'JavaScript · Globe.gl',
    'project.globe.problem': 'The Our World in Data CO₂ dataset covers 195 countries and 30 years — but it\'s just a CSV.',
    'project.globe.result':  'Interactive 3D heatmap globe — 195 countries, 1990–2022, drag to explore.',

    'project.ironforge.title':   'IronForge',
    'project.ironforge.tech':    'Python · Flask · SQLite',
    'project.ironforge.problem': 'Live database needed concurrent read/write without locking the primary process — direct file edits caused corruption.',
    'project.ironforge.result':  '15-endpoint REST API with snapshot isolation + 4 web dashboards; zero data loss incidents.',

    'project.backup.title':   'Backup Monitoring Report',
    'project.backup.tech':    'Power BI · Zabbix',
    'project.backup.problem': 'Backup failures only detected after impact had already occurred.',
    'project.backup.result':  'Proactive alerts with 0 undetected incidents in 6 months.',

    /* EXPERIENCE */
    'experience.label':          'Experience',
    'experience.title':          'Where I\'ve worked.',
    'experience.badge.current':  'current',
    'experience.badge.ongoing':  'ongoing',

    'exp.wevy.period': 'Oct 2024 – Present',
    'exp.wevy.role':   'CX & Data Analyst',
    'exp.wevy.org':    'Wevy · Cloud IaaS/SaaS/PaaS',
    'exp.wevy.desc':   'Started as CX intern (Oct 2024), promoted to Analyst (Jul 2025). Migrated manual Excel controls to ETL/ELT pipelines in Power Query. Monitored SLA KPIs (FCR, reopening rate, backlog) in Power BI and performed root-cause analysis on recurring incidents. Automated Zoho CRM ↔ SharePoint sync via Power Automate. Built self-service dashboards with advanced DAX. Delivered QBRs in English to international executive accounts.',

    'exp.us.period': '2019 – 2023',
    'exp.us.role':   'Operations Specialist',
    'exp.us.org':    'Boston, MA / San Diego, CA — USA',
    'exp.us.desc':   'Service and logistics in Boston and San Diego, fully in English. That\'s where the C2 came from.',

    'exp.ads.period': '2024 – 2026',
    'exp.ads.role':   'B.S. Systems Analysis & Development',
    'exp.ads.org':    'Uninter University',
    'exp.ads.desc':   'Algorithms, databases, software engineering, web. The formal side of what I\'ve been doing hands-on at Wevy.',

    /* CONTACT */
    'contact.label':    'Contact',
    'contact.headline': 'Let\'s talk data.',
    'contact.sub':      'Open to Data Analyst and BI Developer opportunities.',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Send Email',

    /* DEMO v2 */
    'demo.title':           'Analytics Preview',
    'demo.note':            'Synthetic data — real methodology',
    'demo.filter.period':   'Period',
    'demo.filter.client':   'Client',
    'demo.period.24m':      '24 months',
    'demo.period.12m':      '12 months',
    'demo.period.6m':       '6 months',
    'demo.client.all':      'All',
    'demo.kpi.sla':         'SLA Avg',
    'demo.kpi.volume':      'Tickets',
    'demo.kpi.fcr':         'FCR %',
    'demo.kpi.reopen':      'Reopening Rate',
    'demo.kpi.csat':        'CSAT',
    'demo.tree.title':      'Decomposition — Total Tickets',
    'demo.tree.by.category':'By Category',
    'demo.tree.by.client':  'By Client',
  },

  pt: {
    /* NAV */
    'nav.about':      'Sobre',
    'nav.stack':      'Stack',
    'nav.projects':   'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact':    'Contato',
    'nav.lang':       'EN',

    /* HERO */
    'hero.eyebrow':     'Data Analyst',
    'hero.h1':          'Transformando ruído operacional\nem clareza de dados.',
    'hero.sub':         '7 anos em operações — 4 deles nos EUA. Agora construo os dashboards que tornam decisões defensáveis.',
    'hero.stat1.value': '2+',
    'hero.stat1.label': 'Anos em BI & Dados',
    'hero.stat2.value': '5',
    'hero.stat2.label': 'Projetos Entregues',
    'hero.stat3.value': '40%',
    'hero.stat3.label': 'Redução em breach de SLA',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact':  'Entrar em contato',

    /* ABOUT */
    'about.label':      'Sobre',
    'about.title':      'Base em operações. Mentalidade de dados.',
    'about.p1':         'Sete anos em operações — quatro deles em Boston e San Diego nos EUA, depois de volta ao Brasil na Wevy como Analista de Operações CX & Dados. Na Wevy, migrei controles manuais do Excel para pipelines ETL/ELT no Power Query, construí dashboards self-service no Power BI para clientes industriais de grande porte e automatizei fluxos entre Zoho CRM e SharePoint via Power Automate.',
    'about.p2':         'Entendo o negócio antes de abrir o Power BI. Inglês C2 — cinco anos em Boston e San Diego. Cursando ADS na Uninter (2024–2026).',
    'about.card.title': 'Focando agora em',

    /* STACK */
    'stack.label':              'Stack Técnica',
    'stack.title':              'Ferramentas que uso.',
    'stack.group.advanced':     'Avançado',
    'stack.group.intermediate': 'Intermediário',
    'stack.group.learning':     'Aprendendo',

    /* PROJECTS */
    'projects.label':   'Projetos',
    'projects.title':   'Trabalhos entregues.',
    'project.problem':  'Problema',
    'project.result':   'Resultado',

    'project.sla.title':    'Dashboard de Conformidade de SLA',
    'project.sla.tech':     'Power BI · DAX',
    'project.sla.problem':  'Time CX rastreava recorrência de tickets manualmente via Excel — sem visão por cliente, inconsistências de nome quebravam a análise.',
    'project.sla.result':   'BI self-service em uso diário: recorrência calculada via DAX com normalização de nomes, 40% mais rápido na resposta a violações.',

    'project.cnpj.title':   'Pipeline de Matching de CNPJ',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciliar CNPJs entre múltiplos arquivos Excel — processo manual e sujeito a erro.',
    'project.cnpj.result':  'Processo de 3 horas reduzido para 8 minutos.',

    'project.globe.title':   'Globo de Emissões de CO₂',
    'project.globe.tech':    'JavaScript · Globe.gl',
    'project.globe.problem': 'O dataset da Our World in Data tem 195 países e 30 anos de histórico — mas é um CSV.',
    'project.globe.result':  'Globo 3D interativo com heatmap — 195 países, 1990–2022, arraste para explorar.',

    'project.ironforge.title':   'IronForge',
    'project.ironforge.tech':    'Python · Flask · SQLite',
    'project.ironforge.problem': 'Banco de dados live precisava de leitura/escrita simultânea sem bloquear o processo principal — edições diretas no arquivo causavam corrupção.',
    'project.ironforge.result':  'REST API com 15 endpoints, isolamento via snapshot + 4 dashboards web; zero incidentes de perda de dados.',

    'project.backup.title':   'Relatório de Monitoramento de Backup',
    'project.backup.tech':    'Power BI · Zabbix',
    'project.backup.problem': 'Falhas de backup detectadas apenas após o impacto já ter ocorrido.',
    'project.backup.result':  'Alertas proativos com 0 incidentes não detectados em 6 meses.',

    /* EXPERIENCE */
    'experience.label':          'Experiência',
    'experience.title':          'Onde trabalhei.',
    'experience.badge.current':  'atual',
    'experience.badge.ongoing':  'em andamento',

    'exp.wevy.period': 'out 2024 – Presente',
    'exp.wevy.role':   'Analista de CX & Dados',
    'exp.wevy.org':    'Wevy · Cloud IaaS/SaaS/PaaS',
    'exp.wevy.desc':   'Iniciou como Estagiário CX (out 2024), promovido a Analista (jul 2025). Migrei controles manuais do Excel para pipelines ETL/ELT no Power Query. Monitorei KPIs de SLA (FCR, taxa de reabertura, backlog) no Power BI e fiz análise de causa raiz em incidentes recorrentes. Automatizei sincronização Zoho CRM ↔ SharePoint via Power Automate. Dashboards self-service com DAX avançado. QBRs em inglês para lideranças de contas internacionais.',

    'exp.us.period': '2019 – 2023',
    'exp.us.role':   'Operações',
    'exp.us.org':    'Boston, MA / San Diego, CA — EUA',
    'exp.us.desc':   'Atendimento e logística em Boston e San Diego, em inglês o tempo todo. É de lá que vem o C2.',

    'exp.ads.period': '2024 – 2026',
    'exp.ads.role':   'Bacharelado em Análise e Desenvolvimento de Sistemas',
    'exp.ads.org':    'Uninter University',
    'exp.ads.desc':   'Algoritmos, bancos de dados, engenharia de software, web. O lado formal do que já faço na prática na Wevy.',

    /* CONTACT */
    'contact.label':    'Contato',
    'contact.headline': 'Vamos falar de dados.',
    'contact.sub':      'Aberto a oportunidades como Data Analyst e BI Developer.',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Enviar Email',

    /* DEMO v2 */
    'demo.title':           'Prévia Analítica',
    'demo.note':            'Dados sintéticos — metodologia real',
    'demo.filter.period':   'Período',
    'demo.filter.client':   'Cliente',
    'demo.period.24m':      '24 meses',
    'demo.period.12m':      '12 meses',
    'demo.period.6m':       '6 meses',
    'demo.client.all':      'Todos',
    'demo.kpi.sla':         'SLA Médio',
    'demo.kpi.volume':      'Tickets',
    'demo.kpi.fcr':         'FCR %',
    'demo.kpi.reopen':      'Taxa de Reabertura',
    'demo.kpi.csat':        'CSAT',
    'demo.tree.title':      'Decomposição — Total de Tickets',
    'demo.tree.by.category':'Por Categoria',
    'demo.tree.by.client':  'Por Cliente',
  }
};

let currentLang = 'en';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
});
