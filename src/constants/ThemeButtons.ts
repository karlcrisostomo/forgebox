import { IButtonConfig } from "@/types/ButtonConfig";

export const THEME_BUTTONS: IButtonConfig[] = [
  { id: "primary", title: "Primary", type: "color" as const },
  { id: "secondary", title: "Secondary", type: "color" as const },
  { id: "accent", title: "Accent", type: "color" as const },
  // { id: "text", title: "Text", type: "color" as const },
  // { id: "undo", icon: FaUndo, type: "utility" as const },
  // { id: "redo", icon: FaRedo, type: "utility" as const },
  // { id: "darkMode", icon: MdDarkMode, type: "utility" as const },
  // { id: "randomColor", icon: PiDiceThreeFill, type: "utility" as const },
] as const;
