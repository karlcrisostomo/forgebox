export type Styles = {
  bar: string;
  nprogress: string;
  spinnerIcon: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
