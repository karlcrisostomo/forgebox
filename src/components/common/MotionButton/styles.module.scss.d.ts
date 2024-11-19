export type Styles = {
  styledButton: string;
  styledDisabled: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
