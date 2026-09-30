import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.resolve("content/blog");
const files = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md"));
const required = ["title", "slug", "summary", "publishedAt", "tags", "draft"];
const slugs = new Set();

for (const file of files) {
  const source = fs.readFileSync(path.join(contentDirectory, file), "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`${file}: frontmatter ausente.`);
  const metadata = Object.fromEntries(match[1].split("\n").map((line) => {
    const separator = line.indexOf(":");
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "")];
  }));
  for (const field of required) {
    if (!metadata[field]) throw new Error(`${file}: campo obrigatório '${field}' ausente.`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) throw new Error(`${file}: slug inválido.`);
  if (slugs.has(metadata.slug)) throw new Error(`${file}: slug duplicado '${metadata.slug}'.`);
  slugs.add(metadata.slug);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.publishedAt)) throw new Error(`${file}: publishedAt inválido.`);
}

console.log(`Blog validado: ${files.length} artigo(s).`);
