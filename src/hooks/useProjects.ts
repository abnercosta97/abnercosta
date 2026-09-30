// src/hooks/useProjects.ts

import { projects } from "../service/projects";

export const useProjects = () => {
  return { projectList: projects };
};
