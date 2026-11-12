import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "1";
const siteBase = process.env.SITE_BASE ?? (isVercel ? "/" : "/abnercosta/");

export default defineConfig({
  plugins: [react()],
  base: siteBase,
});
