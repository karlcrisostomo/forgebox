export interface IEyeDropperButtonProps {
  onPickColor: () => Promise<void>;
}

export interface IEyeDropper {
  open(): Promise<{ sRGBHex: string }>;
}

declare global {
  interface Window {
    EyeDropper: new () => IEyeDropper;
  }
}
