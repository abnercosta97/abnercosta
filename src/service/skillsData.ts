const baseUrl = import.meta.env.BASE_URL;

export interface SkillGroup {
  name: string;
  items: string[];
  icon?: string;
}

const skillsData: SkillGroup[] = [
  {
    name: "Desenvolvimento",
    items: ["TypeScript", "JavaScript", "React", "Node.js", "APIs REST", "HTML", "CSS"],
    icon: `${baseUrl}icon/typescript-icon.png`,
  },
  {
    name: "Dados e geoprocessamento",
    items: ["Python", "PostgreSQL", "PostGIS", "MongoDB", "Big Data", "Dados ambientais"],
    icon: `${baseUrl}icon/psql-icon.png`,
  },
  {
    name: "Plataforma e DevOps",
    items: ["Linux", "Docker", "Kubernetes", "RKE2", "Terraform", "Ansible", "GitLab CI/CD", "ArgoCD"],
    icon: `${baseUrl}icon/linux-icon.png`,
  },
  {
    name: "Segurança e observabilidade",
    items: ["LDAP", "Controle de acesso", "Auditoria", "Prometheus", "Grafana", "Loki", "Documentação técnica"],
    icon: `${baseUrl}icon/scrumagile-icon.png`,
  },
];

export default skillsData;
