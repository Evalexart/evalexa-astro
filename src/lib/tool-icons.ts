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

export const toolIcons: Record<
  string,
  { title: string; path?: string; custom?: boolean; glyph?: "db" | "cloud" }
> = {
  python: siPython,
  sql: { ...sqlGlyph, glyph: "db" },
  oraclecloud: oracleCloudGlyph,
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
