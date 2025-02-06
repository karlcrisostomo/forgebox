export type ThemeColorType =
  | "primary"
  | "secondary"
  | "accent"
  | "text"
  | "undo"
  | "redo";
export type IColorSpace = "hsl" | "hex" | "rgb";

export type IThemePalette = "primary" | "secondary" | "accent" | "text";

export interface IButtonConfig {
  type: ThemeColorType | "undo" | "redo";
  title: string;
  category: "colors" | "history";
}
export interface IThemeColors {
  textColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export interface IThemeState extends IThemeColors {
  past: IThemeColors[];
  current: IThemeColors[];
  isDarkMode: boolean;
  tempColors?: Partial<IThemeColors> | null;
}
