const baseUrl = import.meta.env.BASE_URL;
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "d-nutri",
    title: "D-Nutri",
    description:
      "Aplicação para registrar e acompanhar o consumo diário de calorias e nutrientes.",
    role: "Desenvolvimento full stack",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/DevsDomain/D-Nutri",
    image: `${baseUrl}imagesProjects/dnutri.png`,
  },
  {
    id: "d-tracker",
    title: "D-Tracker",
    description: "Ferramenta de gerenciamento para o gestor de projetos.",
    role: "Desenvolvimento de produto",
    technologies: ["React", "TypeScript"],
    link: "https://github.com/DevsDomain/D-Tracker",
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
    image: `${baseUrl}imagesProjects/loteria.png`,
  },
];
