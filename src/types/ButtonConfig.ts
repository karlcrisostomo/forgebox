import { IconType } from "react-icons/lib";

export interface IButtonConfig {
  id: string;
  type?: string;
  title?: string;
  icon?: IconType;
  action?: () => void;
}
