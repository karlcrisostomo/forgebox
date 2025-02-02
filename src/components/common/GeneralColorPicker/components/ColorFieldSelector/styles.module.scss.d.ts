export type Styles = {
  selectorButton: string;
  selectorContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
