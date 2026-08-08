import { createSatteriMarkdownProcessor } from "@astrojs/markdown-satteri";
import { isOutboundHref } from "./links";

const processor = await createSatteriMarkdownProcessor();

// Any link rendered from markdown that takes the visitor away from the
// current page opens in a new tab, site-wide — see isOutboundHref() in
// ./links for the exact rule (external domain or downloadable document).
// Applied once here, in the shared markdown renderer, rather than opt-in
// per component — every page's markdown content behaves the same way.
const LINK_HREF_PATTERN = /<a\s+href="([^"]+)"/gi;

function addNewTabToOutboundLinks(html: string): string {
  return html.replace(LINK_HREF_PATTERN, (match, href) => {
    if (!isOutboundHref(href)) return match;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer"`;
  });
}

export async function renderMarkdown(value?: string): Promise<string> {
  if (!value) return "";
  const result = await processor.render(value);
  return addNewTabToOutboundLinks(result.code);
}

export async function renderInlineMarkdown(value?: string): Promise<string> {
  const html = await renderMarkdown(value);
  return html.replace(/^<p>/, "").replace(/<\/p>\s*$/, "");
}
