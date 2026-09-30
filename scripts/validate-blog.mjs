import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.resolve("content/blog");
const files = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md"));
const required = ["title", "slug", "summary", "publishedAt", "tags", "draft"];
const slugs = new Set();

for (const file of files) {
  const source = fs.readFileSync(path.join(contentDirectory, file), "utf8").replace(/^\uFEFF/, "");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${file}: frontmatter ausente.`);
  const metadata = Object.fromEntries(match[1].split(/\r?\n/).map((line) => {
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`${file}: linha inválida no frontmatter.`);
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "")];
  }));
  for (const field of required) {
    if (!metadata[field]) throw new Error(`${file}: campo obrigatório '${field}' ausente.`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) throw new Error(`${file}: slug inválido.`);
  if (path.basename(file, path.extname(file)) !== metadata.slug) throw new Error(`${file}: nome do arquivo deve corresponder ao slug.`);
  if (slugs.has(metadata.slug)) throw new Error(`${file}: slug duplicado '${metadata.slug}'.`);
  slugs.add(metadata.slug);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.publishedAt)) throw new Error(`${file}: publishedAt inválido.`);
  const date = new Date(`${metadata.publishedAt}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== metadata.publishedAt) throw new Error(`${file}: publishedAt inválido.`);
  if (!/^\[[^\]]*\]$/.test(metadata.tags)) throw new Error(`${file}: tags devem ser um array na mesma linha.`);
  if (!metadata.tags.slice(1, -1).trim()) throw new Error(`${file}: tags não podem ser vazias.`);
  if (metadata.draft !== "true" && metadata.draft !== "false") throw new Error(`${file}: draft deve ser true ou false.`);
  if (metadata.title.length < 10 || metadata.title.length > 100) throw new Error(`${file}: title deve ter entre 10 e 100 caracteres.`);
  if (metadata.summary.length < 80 || metadata.summary.length > 180) throw new Error(`${file}: summary deve ter entre 80 e 180 caracteres.`);
  const body = match[2].trim();
  if (!body) throw new Error(`${file}: corpo vazio.`);
  if (/^#\s/m.test(body)) throw new Error(`${file}: não use H1 no corpo; o título vem do frontmatter.`);
  if (/<\/?[a-z][a-z0-9]*(?:\s[^>]*)?>/i.test(body)) throw new Error(`${file}: HTML bruto não é permitido.`);
  if (/\]\(\s*(?:javascript|data|vbscript):/i.test(body)) throw new Error(`${file}: URL de link não permitida.`);
}

console.log(`Blog validado: ${files.length} artigo(s).`);
