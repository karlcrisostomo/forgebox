export interface IGoogleFontsPayload {
  family?: string;
  subset?: string;
  sort?: "popularity" | "trending" | "style" | "alpha";
  category?: "serif" | "sans-serif" | "display" | "handwriting" | "monospace";
}

export interface IGoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: Record<string, string>;
  category: string;
}

export interface IGoogleFontsResponse {
  kind: string;
  items: IGoogleFont[];
}
