export type Styles = {
  colorSwatch: string;
  toolbarBtnContainer: string;
  toolbarBtnContent: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
