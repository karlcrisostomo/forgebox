export type Styles = {
  styledToolbarContent: string;
  styledToolbarWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
