// Shared across markdown rendering (src/lib/markdown.ts) and any
// component that renders its own links from frontmatter rather than
// markdown (e.g. Carousel.astro): a single definition of "does this link
// take the visitor away from the current page", so the two never drift
// apart.
//
// "Outbound" means:
//   - an absolute link to a domain other than evalexa.fr (external site)
//   - a link (absolute or relative) to a downloadable document
//     (.pdf, .doc(x), .xls(x), .ppt(x), .zip, .csv)
// Anything else — relative links to other pages on the site, "#"
// in-page anchors, mailto:, tel: — is NOT outbound and opens in the
// same tab.

const DOC_EXTENSIONS = /\.(pdf|docx?|xlsx?|pptx?|zip|csv)(?:[?#]|$)/i;

export function isOutboundHref(href?: string): boolean {
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

  if (href.startsWith("/")) {
    return DOC_EXTENSIONS.test(href);
  }

  try {
    const url = new URL(href);
    const isInternalDomain =
      url.hostname === "evalexa.fr" || url.hostname.endsWith(".evalexa.fr");

    if (!isInternalDomain) return true;

    return DOC_EXTENSIONS.test(url.pathname);
  } catch {
    return false;
  }
}
