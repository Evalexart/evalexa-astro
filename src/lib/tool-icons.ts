import {
  siPython,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siAstro,
  siGoogleappsscript,
  siDiscord,
  siLinux,
  siTailscale,
} from "simple-icons";

// Simple-icons doesn't ship a generic "SQL" brand mark (it's a language,
// not a company/product), so this one is a plain hand-drawn database glyph
// instead of a brand path.
const sqlGlyph = {
  title: "SQL",
  custom: true,
};

// Simple-icons has no Oracle Corporation mark either — hand-drawn
// cloud/server glyph instead.
const oracleCloudGlyph = {
  title: "Oracle Cloud",
  custom: true,
  glyph: "cloud",
};

// "Développement web" covers HTML/CSS/JS/UX work together — not a single
// brand, so a generic hand-drawn code-tag ("</>") glyph instead of a logo.
const webDevGlyph = {
  title: "Développement web",
  custom: true,
  glyph: "webdev",
};

// "Hébergement" (déploiement FTP + gestion de nom de domaine, hébergeur
// OVH) isn't a brand skill either — hand-drawn server/DNS glyph instead.
const hostingGlyph = {
  title: "Hébergement",
  custom: true,
  glyph: "hosting",
};

export const toolIcons: Record<
  string,
  {
    title: string;
    path?: string;
    custom?: boolean;
    glyph?: "db" | "cloud" | "webdev" | "hosting";
  }
> = {
  python: siPython,
  sql: { ...sqlGlyph, glyph: "db" },
  oraclecloud: oracleCloudGlyph,
  webdev: webDevGlyph,
  hosting: hostingGlyph,
  html5: siHtml5,
  css: siCss,
  javascript: siJavascript,
  typescript: siTypescript,
  astro: siAstro,
  googleappsscript: siGoogleappsscript,
  discord: siDiscord,
  linux: siLinux,
  tailscale: siTailscale,
};
