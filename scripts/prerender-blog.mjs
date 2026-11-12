import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { siteBase, siteRoot } from "../site.config.mjs";

marked.use({
  gfm: true,
  renderer: { html: () => "" },
});

const contentDirectory = path.resolve("content/blog");
const outputDirectory = path.resolve("dist");
const template = fs.readFileSync(path.join(outputDirectory, "index.html"), "utf8");
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const posts = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md")).map((file) => {
  const source = fs.readFileSync(path.join(contentDirectory, file), "utf8");
  const [, rawMetadata, body] = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const metadata = Object.fromEntries(rawMetadata.split("\n").map((line) => {
    const separator = line.indexOf(":");
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "")];
  }));
  return { ...metadata, body: body.trim() };
}).filter((post) => post.draft !== "true");

const render = (content, title, description, canonical, structuredData = null) => template
  .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(description)}" />`)
  .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escape(title)}" />`)
  .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escape(description)}" />`)
  .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
  .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escape(title)}" />`)
  .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escape(description)}" />`)
  .replace("</head>", `<link rel="canonical" href="${canonical}">${structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>` : ""}<style>html,body{margin:0;background:#161513;color:#fff;font-family:Arial,sans-serif}main{max-width:760px;margin:0 auto;padding:80px 24px;color:#fff}a{color:#9cd9f9}p,h1,h2,h3,h4,li{line-height:1.8;color:#fff}pre{overflow-x:auto;background:#0d0d0c;color:#d9f1ff;padding:16px;border-radius:4px}code{color:#d9f1ff}table{display:block;overflow-x:auto;border-collapse:collapse;width:100%}th,td{border:1px solid rgba(255,255,255,.2);padding:10px;text-align:left;min-width:140px}th{background:rgba(255,255,255,.1)}blockquote{border-left:4px solid #9cd9f9;padding-left:16px}</style></head>`)
  .replace('<div id="root"></div>', `<div id="root">${content}</div>`);

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abner Costa",
  jobTitle: "Desenvolvedor de Sistemas e Cientista de Dados",
  description: "Desenvolvedor de software com atuação em dados ambientais, sistemas geoespaciais, DevOps e infraestrutura.",
  url: siteRoot,
  sameAs: [
    "https://github.com/abnercosta97",
    "https://www.linkedin.com/in/abnercosta97",
    "https://lattes.cnpq.br/8131304530975933",
  ],
};

const homepage = template
  .replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${siteRoot}$2`)
  .replace(/(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/, `$1${JSON.stringify(personStructuredData).replaceAll("<", "\\u003c")}$2`);
fs.writeFileSync(path.join(outputDirectory, "index.html"), homepage);

const listing = `<main><h1>Blog</h1><p>Artigos simples sobre software, dados ambientais, sistemas geoespaciais e infraestrutura.</p><ul>${posts.map((post) => `<li><a href="${siteBase}blog/${post.slug}/"><h2>${escape(post.title)}</h2></a><p>${escape(post.summary)}</p></li>`).join("")}</ul></main>`;
fs.mkdirSync(path.join(outputDirectory, "blog"), { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "blog/index.html"), render(listing, "Blog | Abner Costa", "Artigos simples sobre software, dados ambientais, sistemas geoespaciais e infraestrutura.", `${siteRoot}blog/`));

for (const post of posts) {
  const article = `<main><a href="${siteBase}blog/">← Voltar para o blog</a><article><h1>${escape(post.title)}</h1><p>${escape(post.summary)}</p>${marked.parse(post.body)}</article></main>`;
  const directory = path.join(outputDirectory, "blog", post.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), render(article, `${post.title} | Abner Costa`, post.summary, `${siteRoot}blog/${post.slug}/`, {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: "Abner Costa" },
    mainEntityOfPage: `${siteRoot}blog/${post.slug}/`,
  }));
}

const urls = ["", "blog/", ...posts.map((post) => `blog/${post.slug}/`)];
fs.writeFileSync(path.join(outputDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${siteRoot}${url}</loc></url>`).join("")}</urlset>`);
fs.writeFileSync(path.join(outputDirectory, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteRoot}sitemap.xml\n`);

console.log(`Páginas estáticas geradas: ${posts.length + 1}.`);
