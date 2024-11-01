import { ReactNode } from "react";

export interface IToolBoxMenuItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export const ToolBoxMenuItems: IToolBoxMenuItem[] = [
  {
    name: "Color Generator",
    href: "/tools/color-generator",
    icon: null,
  },
  {
    name: "Image Cropper",
    href: "/tools/image-cropper",
    icon: null,
  },

];
