import { StaticImageData } from "next/image";

export interface IButtonConfig {
  id: string;
  type?: string;
  title: string;
  icon?: StaticImageData | string;
  action?: () => void;
}
