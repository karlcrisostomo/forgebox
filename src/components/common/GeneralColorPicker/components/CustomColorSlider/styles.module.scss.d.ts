export type Styles = {
  colorSlider: string;
  colorThumb: string;
  label: string;
  sliderOutput: string;
  sliderTrack: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
