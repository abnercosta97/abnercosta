// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "D-Nutri",
    description:
      "Allows users to record and monitor their daily intake of calories and nutrients, helping them control their diet and maintain their health.",
    link: "https://github.com/DevsDomain/D-Nutri",
    image: "/imagesProjects/dnutri.png",
  },
  {
    id: 2,
    title: "D-Tracker",
    description: "Ferramenta de gerenciamento para o gestor de projetos.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: "/imagesProjects/d-trackerLow.gif",
  },
  {
    id: 3,
    title: "Bike4You",
    description:
      "A peer-to-peer web application that connects bicycle owners with renters, acting solely as an intermediary without handling payments.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: "/imagesProjects/d-trackerLow.gif",
  },
  {
    id: 4,
    title: "IBGE Localidades App",
    description:
      "Aplicativo React TS que lista regiões, estados e mesorregiões do Brasil utilizando a API de localidades do IBGE.",
    link: "https://github.com/abnercosta97/ibge-localidades-app",
    image: "/imagesProjects/ibge-localidadesLow.gif",
  },
  {
    id: 5,
    title: "Resultado Loterias",
    description:
      "Aplicação Web para exibir últimos resultados das Loterias Caixas.",
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    image: "/imagesProjects/loteria.png",
  },
  // Adicione mais projetos conforme necessário
];
