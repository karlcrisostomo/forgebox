import { IButtonConfig } from "@/types/ButtonConfig";

export const THEME_BUTTONS: IButtonConfig[] = [
  { id: "primary", title: "Primary", type: "color" as const },
  { id: "secondary", title: "Secondary", type: "color" as const },
  { id: "accent", title: "Accent", type: "color" as const },
  { id: "text", title: "Text", type: "color" as const },
  { id: "undo", title: "Undo", type: "utility" as const },
  { id: "redo", title: "Redo", type: "utility" as const },
  { id: "darkMode", title: "Dark Mode", type: "utility" as const },
  { id: "randomColor", title: "Random Color", type: "utility" as const },
] as const;
