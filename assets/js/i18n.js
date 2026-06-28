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
    'hero.name':        'Victor Mittestainer',
    'hero.eyebrow':     'Bilingual Data Analyst',
    'hero.h1':          'Data moves the world.',
    'hero.sub':         'CX Analyst at Wevy — figured out what data can do, and that\'s where I\'m headed.',
    'hero.stat1.value': '40%',
    'hero.stat1.label': 'Faster SLA Response',
    'hero.stat2.value': '6',
    'hero.stat2.label': 'Projects Shipped',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact':  'Get in touch',
    'hero.globe.label': 'CO₂ emissions · 2022 · hover a country',

    /* ABOUT */
    'about.label':      'About',
    'about.title':      'Operations background. Data mindset.',
    'about.p1':         'Seven years in operations — four running service and logistics in Boston and San Diego, then back to Brazil joining Wevy as a CX & Data Analyst. At Wevy, I migrated manual Excel controls to ETL/ELT pipelines in Power Query, built self-service Power BI dashboards for industrial clients (SKF-tier), and automated workflows between Zoho CRM and SharePoint via Power Automate.',
    'about.p2':         'I understand the business before I open Power BI. English C2 — four years in Boston and San Diego. Currently completing a B.S. in Systems Analysis & Development at Uninter (2024–2026).',
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
    'project.sla.problem':  'Only one person could detect recurring alerts — manual Excel filtering across CPU/mem/disk tickets, no per-client SLA view.',
    'project.sla.result':   '3-person CX team runs self-service: DAX auto-flags recurring incidents, SLA tracked across SaaS/IaaS/PaaS clients, feeds monthly books.',

    'project.cnpj.title':   'CNPJ Matching Pipeline',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciling CNPJs across multiple Excel files — error-prone and manual.',
    'project.cnpj.result':  '3-hour process reduced to 8 minutes.',

    'project.globe.title':   'CO₂ Emissions Globe',
    'project.globe.tech':    'JavaScript · Globe.gl',
    'project.globe.problem': 'The Our World in Data CO₂ dataset covers 195 countries and 30 years — but it\'s just a CSV.',
    'project.globe.result':  'Interactive 3D heatmap globe — 195 countries, 1990–2022, drag to explore.',

    'project.ironforge.title':   'IronForge',
    'project.ironforge.tech':    'Python · SQLite · 4 Dashboards',
    'project.ironforge.problem': 'Ops data lived in a live SQLite database — no safe way to query it without risking corruption.',
    'project.ironforge.result':  'Built REST API + 4 analytical dashboards on live data; zero data loss. SQL queries against real operational data.',

    'project.backup.title':   'Backup Monitoring Report',
    'project.backup.tech':    'Power BI · Zabbix',
    'project.backup.problem': 'Backup failures only detected after impact had already occurred.',
    'project.backup.result':  'Proactive alerts with 0 undetected incidents in 6 months.',

    'project.link.code':  'View Code',

    'project.sql.title':   'CAGED Indústria SP',
    'project.sql.tech':    'SQL · DuckDB · Python',
    'project.sql.problem': 'Novo CAGED microdata covers millions of records — needed SQL analytics to find SP manufacturing employment trends post-2020.',
    'project.sql.result':  'Window functions + CTEs in DuckDB reveal per-municipality recovery patterns, 2021–2024.',

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
    'contact.resume':   'Download CV',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Send Email',

    /* DEMO v2 */
    'demo.label':           'Demo',
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
    'hero.name':        'Victor Mittestainer',
    'hero.eyebrow':     'Analista de Dados Bilíngue',
    'hero.h1':          'Os dados movem o mundo.',
    'hero.sub':         'Analista de CX na Wevy — descobri o que dados fazem e decidi ir fundo nisso.',
    'hero.stat1.value': '40%',
    'hero.stat1.label': 'Resposta de SLA mais rápida',
    'hero.stat2.value': '6',
    'hero.stat2.label': 'Projetos entregues',
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact':  'Entrar em contato',
    'hero.globe.label': 'Emissões de CO₂ · 2022 · passe o mouse em um país',

    /* ABOUT */
    'about.label':      'Sobre',
    'about.title':      'Base em operações. Mentalidade de dados.',
    'about.p1':         'Sete anos em operações — quatro deles em Boston e San Diego nos EUA, depois de volta ao Brasil na Wevy como Analista de CX & Dados. Na Wevy, migrei controles manuais do Excel para pipelines ETL/ELT no Power Query, construí dashboards self-service no Power BI para clientes industriais como SKF e automatizei a sincronização entre Zoho CRM e SharePoint via Power Automate.',
    'about.p2':         'Entendo o negócio antes de abrir o Power BI. Inglês C2 — quatro anos em Boston e San Diego. Cursando ADS na Uninter (2024–2026).',
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
    'project.sla.problem':  'Só quem sabia filtrava Excel para ver recorrência de alertas (CPU/mem/disco) — sem visão por cliente nem SLA consolidado.',
    'project.sla.result':   'Equipe de 3 usa self-service: recorrência calculada via DAX, SLA de clientes SaaS/IaaS/PaaS em tempo real, base dos books mensais.',

    'project.cnpj.title':   'Pipeline de Matching de CNPJ',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciliar CNPJs entre múltiplos arquivos Excel — processo manual e sujeito a erro.',
    'project.cnpj.result':  'Processo de 3 horas reduzido para 8 minutos.',

    'project.globe.title':   'Globo de Emissões de CO₂',
    'project.globe.tech':    'JavaScript · Globe.gl',
    'project.globe.problem': 'O dataset da Our World in Data tem 195 países e 30 anos de histórico — mas é só um CSV.',
    'project.globe.result':  'Globo 3D interativo com heatmap — 195 países, 1990–2022, arraste para explorar.',

    'project.ironforge.title':   'IronForge',
    'project.ironforge.tech':    'Python · SQLite · 4 Dashboards',
    'project.ironforge.problem': 'Dados operacionais em SQLite ao vivo — sem forma segura de consultar sem risco de corrupção.',
    'project.ironforge.result':  'API REST + 4 dashboards analíticos em dados reais; zero perda de dados. Queries SQL em dados operacionais reais.',

    'project.backup.title':   'Relatório de Monitoramento de Backup',
    'project.backup.tech':    'Power BI · Zabbix',
    'project.backup.problem': 'Falhas de backup detectadas apenas após o impacto já ter ocorrido.',
    'project.backup.result':  'Alertas proativos com 0 incidentes não detectados em 6 meses.',

    'project.link.code':  'Ver Código',

    'project.sql.title':   'CAGED Indústria SP',
    'project.sql.tech':    'SQL · DuckDB · Python',
    'project.sql.problem': 'Microdados do Novo CAGED cobrem milhões de registros — precisava de SQL analítico para encontrar tendências de emprego industrial em SP pós-2020.',
    'project.sql.result':  'Window functions + CTEs no DuckDB revelam padrões de recuperação por município, 2021–2024.',

    /* EXPERIENCE */
    'experience.label':          'Experiência',
    'experience.title':          'Onde trabalhei.',
    'experience.badge.current':  'atual',
    'experience.badge.ongoing':  'em andamento',

    'exp.wevy.period': 'out 2024 – presente',
    'exp.wevy.role':   'Analista de CX & Dados',
    'exp.wevy.org':    'Wevy · Cloud IaaS/SaaS/PaaS',
    'exp.wevy.desc':   'Comecei como Estagiário CX (out 2024), promovido a Analista (jul 2025). Migrei controles manuais do Excel para pipelines ETL/ELT no Power Query. Monitorei KPIs de SLA (FCR, taxa de reabertura, backlog) no Power BI e investiguei causas raiz de incidentes recorrentes. Automatizei a sincronização Zoho CRM ↔ SharePoint via Power Automate. Dashboards self-service com DAX avançado. QBRs em inglês para clientes internacionais.',

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
    'contact.resume':   'Baixar CV',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Enviar email',

    /* DEMO v2 */
    'demo.label':           'Demo',
    'demo.title':           'Prévia analítica',
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
    'demo.kpi.reopen':      'Taxa de reabertura',
    'demo.kpi.csat':        'CSAT',
    'demo.tree.title':      'Decomposição — total de tickets',
    'demo.tree.by.category':'Por categoria',
    'demo.tree.by.client':  'Por cliente',
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
