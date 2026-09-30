import { marked } from "marked";

marked.use({
  gfm: true,
  renderer: { html: () => "" },
});

export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  draft: boolean;
  body: string;
  html: string;
}

const sources = import.meta.glob("../../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const parseFrontmatter = (source: string) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Cada artigo precisa de frontmatter delimitado por ---.");

  const metadata: Record<string, string | boolean | string[]> = {};
  match[1].split("\n").forEach((line) => {
    const separator = line.indexOf(":");
    if (separator === -1) return;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      metadata[key] = value.slice(1, -1).split(",").map((item) => item.trim().replace(/^['"]|['"]$/g, ""));
    } else if (value === "true" || value === "false") {
      metadata[key] = value === "true";
    } else {
      metadata[key] = value.replace(/^['"]|['"]$/g, "");
    }
  });

  return { metadata, body: match[2].trim() };
};

export const blogPosts: BlogPost[] = Object.values(sources)
  .map((source) => {
    const { metadata, body } = parseFrontmatter(source);
    return {
      title: String(metadata.title),
      slug: String(metadata.slug),
      summary: String(metadata.summary),
      publishedAt: String(metadata.publishedAt),
      tags: Array.isArray(metadata.tags) ? metadata.tags : [],
      draft: metadata.draft === true,
      body,
      html: String(marked.parse(body)),
    };
  })
  .filter((post) => !post.draft)
  .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
