import { createSatteriMarkdownProcessor } from "@astrojs/markdown-satteri";

const processor = await createSatteriMarkdownProcessor();

export async function renderMarkdown(value?: string): Promise<string> {
  if (!value) return "";
  const result = await processor.render(value);
  return result.code;
}

export async function renderInlineMarkdown(value?: string): Promise<string> {
  const html = await renderMarkdown(value);
  return html.replace(/^<p>/, "").replace(/<\/p>\s*$/, "");
}
