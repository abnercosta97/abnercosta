export interface Publication {
  title: string;
  year: string;
  event: string;
  summary: string;
  doi: string;
  link: string;
}

export const publications: Publication[] = [
  {
    title: "Sistema de Monitoramento para Sala de Situação do Programa Queimadas",
    year: "2025",
    event: "XXV Workshop de Computação Aplicada · INPE/WorCap",
    summary:
      "Trabalho sobre um sistema aplicado ao monitoramento e à disponibilização de informações do Programa Queimadas.",
    doi: "10.5281/zenodo.17305421",
    link: "https://doi.org/10.5281/zenodo.17305421",
  },
  {
    title: "Análise, Projeto e Criação de Datasets para Assistente Virtual do Programa Queimadas",
    year: "2026",
    event: "4º Science & Business Connection",
    summary:
      "Estudo sobre organização e criação de datasets para apoiar um assistente virtual orientado a dados ambientais.",
    doi: "10.29327/9786527225782.1468928",
    link: "https://doi.org/10.29327/9786527225782.1468928",
  },
  {
    title: "Critérios Geoespaciais e Temporais para Cálculo de Área Queimada com Resolução de 1 km",
    year: "2026",
    event: "4º Science & Business Connection",
    summary:
      "Discussão de critérios espaciais e temporais para produzir análises mais consistentes de área queimada.",
    doi: "10.29327/9786527225782.1469406",
    link: "https://doi.org/10.29327/9786527225782.1469406",
  },
  {
    title: "Otimização de Pipeline para Extração de Big Data contendo Focos de Calor",
    year: "2026",
    event: "4º Science & Business Connection",
    summary:
      "Trabalho sobre extração e processamento de grandes volumes de dados de focos de calor do Programa Queimadas.",
    doi: "10.29327/9786527225782.1469627",
    link: "https://doi.org/10.29327/9786527225782.1469627",
  },
];
