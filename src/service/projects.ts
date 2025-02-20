const baseUrl = import.meta.env.BASE_URL;

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
    title: "Resultado Loterias",
    description:
      "Aplicação Web para exibir últimos resultados das Loterias Caixas.",
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    image: `${baseUrl}imagesProjects/loteria.png`,
  },
  {
    id: 2,
    title: "D-Tracker",
    description: "Ferramenta de gerenciamento para o gestor de projetos.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: `${baseUrl}imagesProjects/d-trackerLow.gif`,
  },
  {
    id: 3,
    title: "IBGE Localidades App",
    description:
      "Aplicativo React TS que lista regiões, estados e mesorregiões do Brasil utilizando a API de localidades do IBGE.",
    link: "https://github.com/abnercosta97/ibge-localidades-app",
    image: `${baseUrl}imagesProjects/ibge-localidadesLow.gif`,
  },
];
