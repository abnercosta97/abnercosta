export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Desenvolvedor de Software",
    organization: "Datainfo · Programa Queimadas (INPE)",
    period: "2024 — atual",
    summary:
      "Atuação em sistemas, dados ambientais e infraestrutura de software para produtos geoespaciais e suporte à decisão.",
    highlights: [
      "Desenvolvimento e sustentação de APIs, produtos de dados e aplicações web.",
      "Contribuição em pipelines de dados, monitoramento ambiental e sensoriamento remoto.",
      "Experiência prática com automação, DevOps, segurança operacional e observabilidade.",
    ],
  },
];

export const education = {
  course: "Desenvolvimento de Software Multiplataforma",
  institution: "FATEC Jacareí",
  period: "2023 — 2025",
  status: "Concluído",
};
