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
    'hero.sub':         '7 years in operations — 4 of them in the US. Now I build the dashboards that make decisions defensible.',
    'hero.stat1.value': '7+',
    'hero.stat1.label': 'Years in Operations',
    'hero.stat2.value': '4',
    'hero.stat2.label': 'BI Projects',
    'hero.stat3.value': '40%',
    'hero.stat3.label': 'SLA breach reduction',

    /* ABOUT */
    'about.label':      'About',
    'about.title':      'Operations background. Data mindset.',
    'about.p1':         'Seven years in operations — four running service and logistics in Boston and San Diego, then back to Brazil joining Wevy as a CX & Data Analyst. At Wevy, I migrated manual Excel controls to ETL/ELT pipelines in Power Query, built self-service Power BI dashboards for industrial clients (SKF-tier), and automated workflows between Zoho CRM and SharePoint via Power Automate.',
    'about.p2':         'The edge I bring: I understand the business before I open Power BI. Bilingual C2 English — built through 4 years of multicultural operations in the US. Currently completing a B.S. in Systems Analysis & Development at Uninter (2024–2027).',
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
    'project.link':     'View on GitHub →',

    'project.sla.title':    'SLA Compliance Dashboard',
    'project.sla.tech':     'Power BI · DAX',
    'project.sla.problem':  'No real-time visibility into SLA breaches across client environments.',
    'project.sla.result':   '40% reduction in response time to violations.',

    'project.cnpj.title':   'CNPJ Matching Pipeline',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciling CNPJs across multiple Excel files — error-prone and manual.',
    'project.cnpj.result':  '3-hour process reduced to 8 minutes.',

    'project.school.title':   'School Analytics Dashboard',
    'project.school.tech':    'SQL · Power BI',
    'project.school.problem': 'No centralized view of attendance, grades, and behavioral KPIs for teaching staff.',
    'project.school.result':  '6 KPIs mapped, conceptual proposal validated with faculty at EMEF/EJA Campinas-SP.',

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
    'exp.us.desc':   'Service and logistics operations in 100% English-speaking multicultural environments. Foundation of C2 bilingual fluency and the operational lens I now apply to data work.',

    'exp.ads.period': '2024 – 2027',
    'exp.ads.role':   'B.S. Systems Analysis & Development',
    'exp.ads.org':    'Uninter University',
    'exp.ads.desc':   'Coursework covering algorithms, databases, software engineering, and web development. Complementing hands-on BI and automation experience with formal CS fundamentals.',

    /* CONTACT */
    'contact.label':    'Contact',
    'contact.headline': 'Let\'s talk data.',
    'contact.sub':      'Open to Data Analyst and BI Developer opportunities.',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Send Email',
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
    'hero.stat1.value': '7+',
    'hero.stat1.label': 'Anos em Operações',
    'hero.stat2.value': '4',
    'hero.stat2.label': 'Projetos de BI',
    'hero.stat3.value': '40%',
    'hero.stat3.label': 'Redução em breach de SLA',

    /* ABOUT */
    'about.label':      'Sobre',
    'about.title':      'Base em operações. Mentalidade de dados.',
    'about.p1':         'Sete anos em operações — quatro deles em Boston e San Diego nos EUA, depois de volta ao Brasil na Wevy como Analista de Operações CX & Dados. Na Wevy, migrei controles manuais do Excel para pipelines ETL/ELT no Power Query, construí dashboards self-service no Power BI para clientes industriais de grande porte e automatizei fluxos entre Zoho CRM e SharePoint via Power Automate.',
    'about.p2':         'O diferencial que trago: entendo o negócio antes de abrir o Power BI. Inglês C2 bilíngue — desenvolvido em 4 anos de operações multiculturais nos EUA. Atualmente cursando Análise e Desenvolvimento de Sistemas na Uninter (2024–2027).',
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
    'project.link':     'Ver no GitHub →',

    'project.sla.title':    'Dashboard de Conformidade de SLA',
    'project.sla.tech':     'Power BI · DAX',
    'project.sla.problem':  'Sem visibilidade em tempo real de breaches de SLA nos ambientes dos clientes.',
    'project.sla.result':   '40% de redução no tempo de resposta a violações.',

    'project.cnpj.title':   'Pipeline de Matching de CNPJ',
    'project.cnpj.tech':    'Python · pandas',
    'project.cnpj.problem': 'Reconciliar CNPJs entre múltiplos arquivos Excel — processo manual e sujeito a erro.',
    'project.cnpj.result':  'Processo de 3 horas reduzido para 8 minutos.',

    'project.school.title':   'Dashboard de Análise Escolar',
    'project.school.tech':    'SQL · Power BI',
    'project.school.problem': 'Sem visão centralizada de frequência, notas e KPIs comportamentais para o corpo docente.',
    'project.school.result':  '6 KPIs mapeados, proposta conceitual validada com docentes da EMEF/EJA Campinas-SP.',

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
    'exp.us.desc':   'Operações de atendimento e logística em ambiente 100% em inglês com equipes multiculturais. Base da fluência bilíngue C2 e da visão operacional que aplico hoje na análise de dados.',

    'exp.ads.period': '2024 – 2027',
    'exp.ads.role':   'Bacharelado em Análise e Desenvolvimento de Sistemas',
    'exp.ads.org':    'Uninter University',
    'exp.ads.desc':   'Disciplinas de algoritmos, bancos de dados, engenharia de software e desenvolvimento web. Complementando experiência prática em BI e automação com fundamentos formais de computação.',

    /* CONTACT */
    'contact.label':    'Contato',
    'contact.headline': 'Vamos falar de dados.',
    'contact.sub':      'Aberto a oportunidades como Data Analyst e BI Developer.',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
    'contact.email':    'Enviar Email',
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
