import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Verifica se está rodando na Vercel ou GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "abnercosta"; // Substitua pelo nome do seu repositório no GitHub

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? `/${repoName}/` : "/", // Define base para GitHub Pages ou Vercel
});
