export interface IThemeColors {
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface IThemeState extends IThemeColors {
  past: IThemeColors[];
  future: IThemeColors[];
}
