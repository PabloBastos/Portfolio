// Todo o conteúdo do site fica aqui. Para atualizar textos, links ou
// projetos, edite apenas este arquivo.

export const profile = {
  name: 'Pablo Kauê Bastos',
  shortName: 'Pablo Bastos',
  positioning: 'Desenvolvedor Full Stack · Backend & IA',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Tecnologia, curiosidade e construção.',
  lead: 'Desenvolvedor Full Stack com foco em Backend, interessado em criar aplicações, integrar sistemas e explorar o potencial da Inteligência Artificial na resolução de problemas reais.',
  email: 'pablo.kaue.bastoss@gmail.com',
  phone: '+55 (75) 99827-5660',
  whatsapp: 'https://wa.me/5575998275660',
  github: 'https://github.com/EngPabloBastos',
  linkedin: 'https://www.linkedin.com/in/bastospablo/',
}

export const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#formacao', label: 'Formação' },
  { href: '#certificados', label: 'Certificados' },
]

export const about = [
  'Acredito que tecnologia vai além de escrever código: é sobre entender problemas, explorar possibilidades e construir soluções que façam sentido.',
  'Atualmente, curso Engenharia da Computação na UNIFACS e desenvolvo minha trajetória no desenvolvimento de software Full Stack, com foco em Backend. Tenho uma afinidade especial com Java, construção de APIs e integração de sistemas.',
  'Também me interessa bastante o universo da Inteligência Artificial, principalmente suas aplicações práticas. Já tive a oportunidade de desenvolver uma solução de atendimento com IA integrada ao WhatsApp, experiência que ampliou minha visão sobre como a tecnologia pode transformar processos e gerar resultados concretos.',
  'Estou sempre buscando aprender, experimentar novas ferramentas e tirar ideias do papel. Gosto de desafios que me fazem pensar além do código e enxergar a tecnologia como parte da solução.',
]

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'APIs REST'] },
  { group: 'Banco de dados', items: ['MySQL', 'PostgreSQL', 'SQL'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Ferramentas', items: ['Git', 'GitHub', 'Docker', 'n8n'] },
]

// Case em destaque (apresentação própria, ver Projects.jsx)
export const almabot = {
  title: 'Almabot',
  kicker: 'Inteligência Artificial e automação',
  badge: 'Case profissional · Alma Tecnologia',
  note: 'Implementado em produção. Projeto privado, sem repositório público.',
  context:
    'Etapas do atendimento por WhatsApp, como a triagem, o agendamento e o registro de informações no CRM, dependiam de atividades manuais.',
  solution: [
    'O Almabot é um chatbot desenvolvido para automatizar etapas do atendimento por WhatsApp, utilizando Inteligência Artificial generativa e integração entre diferentes ferramentas e serviços.',
    'A solução realiza a triagem de atendimentos, auxilia no agendamento e coleta informações para registro no CRM, reduzindo atividades manuais e otimizando processos internos.',
  ],
  tags: ['N8N', 'Google Gemini', 'Evolution API', 'Redis', 'WhatsApp', 'Integração com CRM'],
  flow: ['WhatsApp', 'Evolution API', 'N8N', 'Google Gemini', 'Fluxos de automação', 'CRM'],
  impacts: [
    'Automatização da triagem de atendimentos.',
    'Auxílio no agendamento.',
    'Coleta e registro de informações no CRM.',
    'Economia aproximada de R$ 500 mensais com ferramenta de CRM.',
    'Solução implementada e utilizada em produção.',
  ],
}

export const projects = [
  {
    title: 'Conecte-bem',
    badge: { text: 'Projeto final +praTI', soft: true },
    description:
      'Plataforma que conecta organizações não governamentais a pessoas interessadas em trabalho voluntário.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
    link: {
      text: 'Ver no GitHub',
      href: 'https://github.com/julianorafael-dev/conecte-bem',
    },
  },
  {
    title: 'Baba Manager',
    description:
      'Aplicação web voltada à organização de partidas de futebol, estatísticas e classificação.',
    tags: ['React'],
    link: {
      text: 'Ver no GitHub',
      href: 'https://github.com/EngPabloBastos/O-Baba-Project',
    },
  },
  {
    title: 'GameHall',
    description: 'Projeto web com temática gamer, desenvolvido com HTML, CSS e JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: {
      text: 'Ver projeto',
      href: 'https://engpablobastos.github.io/GameHall/',
    },
  },
]

export const education = [
  {
    when: '2024 – Em andamento',
    title: 'Engenharia da Computação',
    institution: 'UNIFACS',
    text: 'Fundamentos da computação, algoritmos e programação, matemática computacional, redes de computadores e modelagem de software.',
  },
  {
    when: '400 horas — Em andamento',
    title: 'Formação Full Stack',
    institution: 'MaisPraTI',
    text: 'Frontend com HTML, CSS, JavaScript e React. Backend com Java, POO, Spring Boot e APIs REST, com MySQL e PostgreSQL. Git, GitHub, Docker e CI/CD, além de IA com Python.',
  },
]

// status: 'done' | 'ongoing'
export const certificates = [
  { title: 'Java Completo: Programação Orientada a Objetos + Projetos', issuer: 'Udemy', status: 'done' },
  { title: 'Python POO – Programação de Soluções Computacionais', issuer: 'UNIFACS', hours: '40 horas', status: 'done' },
  { title: 'MySQL - Modelagem, Consultas e Manipulação de Dados', issuer: 'Curso em Vídeo', status: 'done' },
  { title: 'Automação com N8N e Agentes de Inteligência Artificial', issuer: 'Udemy', hours: '20 horas', status: 'done' },
  { title: 'Modelagem de Dados', issuer: 'Fundação Bradesco', hours: '15 horas', status: 'done' },
  { title: 'Ambientes Computacionais e Conectividade', issuer: 'UNIFACS', status: 'done' },
  { title: 'Inglês · Nível B2', issuer: 'EF SET', status: 'done' },
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Skill Builder', status: 'ongoing' },
]
