export interface IGoogleFontsPayload {
  family?: string;
  subset?: string;
  sort?: "popularity" | "trending" | "style" | "alpha";
  category?: "serif" | "sans-serif" | "display" | "handwriting" | "monospace";
  files?: FontFiles;
}

export type FontWeight = "regular" | "500" | "600" | "700";
export type FontStyle = "italic" | "500italic" | "600italic" | "700italic";
export type FontVariant = FontWeight | FontStyle;

export type FontFiles = Partial<Record<FontVariant, string>>;
export interface IGoogleFont {
  [key: string]: unknown;
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: FontFiles;
  category: string;
}

export interface IGoogleFontsResponse {
  kind: string;
  items: IGoogleFont[];
}
