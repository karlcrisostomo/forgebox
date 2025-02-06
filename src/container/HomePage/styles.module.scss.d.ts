export type Styles = {
  component: string;
  container: string;
  placeholder: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
