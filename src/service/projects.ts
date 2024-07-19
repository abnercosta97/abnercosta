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
    title: "Resultado Loterias",
    description:
      "Aplicação Web para exibir últimos resultados das Loterias Caixas.",
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    image: "/imagesProjects/loteria.png",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    link: "https://linkprojeto2.com",
    image: "/imagesProjects/Projeto2.png",
  },
  // Adicione mais projetos conforme necessário
];
