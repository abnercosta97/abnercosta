import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const contentDirectory = path.resolve("content/blog");
const outputDirectory = path.resolve("dist");
const template = fs.readFileSync(path.join(outputDirectory, "index.html"), "utf8");
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const posts = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md")).map((file) => {
  const source = fs.readFileSync(path.join(contentDirectory, file), "utf8");
  const [, rawMetadata, body] = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const metadata = Object.fromEntries(rawMetadata.split("\n").map((line) => {
    const separator = line.indexOf(":");
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "")];
  }));
  return { ...metadata, body: body.trim() };
}).filter((post) => post.draft !== "true");

const render = (content, title, description, canonical) => template
  .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(description)}" />`)
  .replace("</head>", `<link rel="canonical" href="${canonical}"></head>`)
  .replace('<div id="root"></div>', `<div id="root">${content}</div>`);

const base = "/abnercosta/";
const listing = `<main><h1>Blog</h1><p>Reflexões sobre desenvolvimento, carreira e projetos.</p><ul>${posts.map((post) => `<li><a href="${base}blog/${post.slug}/"><h2>${escape(post.title)}</h2></a><p>${escape(post.summary)}</p></li>`).join("")}</ul></main>`;
fs.mkdirSync(path.join(outputDirectory, "blog"), { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "blog/index.html"), render(listing, "Blog | Abner Costa", "Reflexões sobre desenvolvimento, carreira e projetos.", `${base}blog/`));

for (const post of posts) {
  const article = `<main><a href="${base}blog/">← Voltar para o blog</a><article><h1>${escape(post.title)}</h1><p>${escape(post.summary)}</p>${marked.parse(post.body)}</article></main>`;
  const directory = path.join(outputDirectory, "blog", post.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), render(article, `${post.title} | Abner Costa`, post.summary, `${base}blog/${post.slug}/`));
}

const urls = ["", "blog/", ...posts.map((post) => `blog/${post.slug}/`)];
fs.writeFileSync(path.join(outputDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>https://abnercosta97.github.io${base}${url}</loc></url>`).join("")}</urlset>`);

console.log(`Páginas estáticas geradas: ${posts.length + 1}.`);
