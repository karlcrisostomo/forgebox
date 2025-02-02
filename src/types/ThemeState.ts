export type ThemeColorType = "primary" | "secondary" | "accent" | "text";
export type IColorSpace = "hsl" | "hex" | "rgb";
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
}
