import { StaticImageData } from "next/image";

export type ThemeColorType = "primary" | "secondary" | "accent" | "text";

export type ICategoryTheme = "color" | "utility";

export type IColorSpace = "hsl" | "hex" | "rgb";

export interface IButtonConfig {
  id: string;
  type: ICategoryTheme;
  title: string;
  icon?: StaticImageData | string;
  action?: () => void;
}
export interface IThemeColors {
  [key: string]: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
}

export interface IThemeState {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  past: IThemeColors[];
  current: IThemeColors[];
  isDarkMode: boolean;
  tempColors?: Partial<IThemeColors> | null;
}
