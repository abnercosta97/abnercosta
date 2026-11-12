const normalizeBase = (value) => {
  if (!value || value === "/") return "/";
  return `/${value.replace(/^\/+|\/+$/g, "")}/`;
};

const isVercel = process.env.VERCEL === "1";

export const siteBase = normalizeBase(
  process.env.SITE_BASE ?? (isVercel ? "/" : "/abnercosta/")
);

export const siteUrl = (
  process.env.SITE_URL ??
  (isVercel ? "https://abnercosta.vercel.app" : "https://abnercosta97.github.io")
).replace(/\/+$/, "");

export const siteRoot = `${siteUrl}${siteBase}`;
