import { ReactNode } from "react";

export interface IToolBoxMenuItem {
  name: string;
  href: string;
  icon: ReactNode;
  includePrefixes: string[];
}

export const ToolBoxMenuItems: IToolBoxMenuItem[] = [
  {
    name: "Color Generator",
    href: "/color-generator",
    icon: null,
    includePrefixes: ["/color-generator"],
  },
  {
    name: "Image Cropper",
    href: "/image-cropper",
    icon: null,
    includePrefixes:['/image-cropper']
  },
];
