const baseUrl = import.meta.env.BASE_URL;
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link: string;
  linkLabel?: string;
  image?: string;
  repository?: string;
  repositoryLabel?: string;
  certificate?: string;
  certificateLabel?: string;
}

export const projects: Project[] = [
  {
    id: "alicerce",
    title: "App Alicerce",
    description: "Aplicação web do projeto Alicerce, disponível para acesso online.",
    role: "Desenvolvimento de aplicação web",
    technologies: ["Aplicação web", "Produto digital"],
    link: "https://oalicerce.vercel.app/",
    linkLabel: "Abrir aplicação",
  },
  {
    id: "nasa-space-apps-2026",
    title: "Galactic Problem Solver — NASA Space Apps Challenge",
    description:
      "Projeto desenvolvido em equipe durante o NASA Space Apps Challenge 2026, com aplicação web apresentada no hackathon.",
    role: "Participação em hackathon e desenvolvimento em equipe",
    technologies: ["NASA Space Apps", "Hackathon", "Aplicação web"],
    link: "https://luk14236-space-apps-teu-2026.hf.space/",
    linkLabel: "Abrir aplicação",
    repository: "https://github.com/luk14236/space_apps_2026_team_teu",
    repositoryLabel: "Ver código",
    certificate: `${baseUrl}certificado-nasa-space-apps.jpeg`,
    certificateLabel: "Ver certificado",
  },
  {
    id: "sala-situacao",
    title: "Sala de Situação do Programa Queimadas",
    description:
      "Sistema aplicado ao monitoramento e à disponibilização de informações ambientais para apoiar a interpretação de ocorrências de fogo.",
    role: "Desenvolvimento e sustentação de software",
    technologies: ["Software", "Dados ambientais", "Monitoramento"],
    link: "https://doi.org/10.5281/zenodo.17305421",
    linkLabel: "Ver publicação",
  },
  {
    id: "pipeline-focos-calor",
    title: "Pipeline de dados de focos de calor",
    description:
      "Trabalho técnico sobre extração e processamento de grandes volumes de dados do Programa Queimadas do INPE.",
    role: "Coautoria técnica e engenharia de dados",
    technologies: ["Big Data", "Python", "Data Science"],
    link: "https://doi.org/10.29327/9786527225782.1469627",
    linkLabel: "Ver publicação",
  },
  {
    id: "area-queimada-1km",
    title: "Área queimada com resolução de 1 km",
    description:
      "Análise de critérios geoespaciais e temporais para produzir interpretações mais consistentes de área queimada.",
    role: "Coautoria técnica e análise geoespacial",
    technologies: ["Geoprocessamento", "Dados ambientais", "Análise espacial"],
    link: "https://doi.org/10.29327/9786527225782.1469406",
    linkLabel: "Ver publicação",
  },
  {
    id: "d-care",
    title: "D-Care",
    description:
      "Plataforma que conecta idosos e suas famílias a cuidadores qualificados, com validação profissional, agendamento seguro e suporte assistido por IA. Atuei na arquitetura do banco, no desenvolvimento full stack dos fluxos de busca e agendamento e no chatbot de suporte.",
    role: "Desenvolvimento full stack e banco de dados",
    technologies: ["React", "TypeScript", "Node.js", "IA"],
    link: "https://github.com/DevsDomain/D-care",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/dcare.gif`,
  },
  {
    id: "d-firetrack",
    title: "D-FireTrack",
    description:
      "Solução para mapeamento automático de cicatrizes de queimadas usando imagens de satélite, Deep Learning e processamento em nuvem. Contribuí com uma API STAC para consulta e download de imagens e com pipelines de processamento.",
    role: "Desenvolvimento de API e pipelines",
    technologies: ["Python", "API STAC", "Cloud", "Deep Learning"],
    link: "https://github.com/DevsDomain/D-FireTrack",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/dfiretrack.gif`,
  },
  {
    id: "d-nutri",
    title: "D-Nutri",
    description:
      "Aplicação para registrar e acompanhar o consumo diário de calorias e nutrientes.",
    role: "Desenvolvimento full stack",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/DevsDomain/D-Nutri",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/dnutri.png`,
  },
  {
    id: "d-tracker",
    title: "D-Tracker",
    description: "Ferramenta de gerenciamento para o gestor de projetos.",
    role: "Desenvolvimento de produto",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/DevsDomain/D-Tracker",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/d-trackerLow.gif`,
  },
  {
    id: "bike4you",
    title: "Bike4You",
    description:
      "Aplicação peer-to-peer que conecta proprietários de bicicletas a pessoas interessadas em alugá-las.",
    role: "Desenvolvimento full stack",
    technologies: ["React", "Node.js"],
    link: "https://github.com/DevsDomain/Bike4you",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/bike4you.png`,
  },
  {
    id: "ibge-localidades",
    title: "IBGE Localidades App",
    description:
      "Aplicativo React TS que lista regiões, estados e mesorregiões do Brasil utilizando a API de localidades do IBGE.",
    role: "Desenvolvimento front-end",
    technologies: ["React", "TypeScript", "API REST"],
    link: "https://github.com/abnercosta97/ibge-localidades-app",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/ibge-localidadesLow.gif`,
  },
  {
    id: "loterias",
    title: "Resultado Loterias",
    description:
      "Aplicação web para exibir os últimos resultados das Loterias Caixa.",
    role: "Desenvolvimento front-end",
    technologies: ["React", "JavaScript"],
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/loteria.png`,
  },
  {
    id: "expert-treinamentos",
    title: "Expert Treinamentos",
    description:
      "Sistema web de apoio ao Scrum, com páginas informativas, templates de artefatos e guias de boas práticas para equipes ágeis.",
    role: "Desenvolvimento front-end",
    technologies: ["React", "JavaScript", "Scrum"],
    link: "https://github.com/Our-team-fatec/Expert-Treinamentos",
    linkLabel: "Ver projeto",
    image: `${baseUrl}imagesProjects/expert-treinamentos.gif`,
  },
];
