import { ReactNode } from "react";

export interface IToolBoxMenuItem {
  name: string;
  href: string;
  icon: ReactNode;
  includePrefixes: string[];
}

//include prefixes indicates the current active page
export const ToolBoxMenuItems: IToolBoxMenuItem[] = [
  {
    name: "Design Tools",
    href: "/design-tools",
    icon: null,
    includePrefixes: ["/design-tools"],
  },
  {
    name: "Image Tools",
    href: "/image-tools",
    icon: null,
    includePrefixes: ["/image-tools"],
  },
  {
    name: "Marketing Tools",
    href: "/marketing-tools",
    icon: null,
    includePrefixes: ["/marketing-tools"],
  },
  {
    name: "Social Tools",
    href: "/social-tools",
    icon: null,
    includePrefixes: ["/social-tools"],
  },
  {
    name: "Dev Tools",
    href: "/dev-tools",
    icon: null,
    includePrefixes: ["/dev-tools"],
  },
  {
    name: "Color Tools",
    href: "/color-tools",
    icon: null,
    includePrefixes: ["/color-tools"],
  },
  {
    name: "writing Tools",
    href: "/writing-tools",
    icon: null,
    includePrefixes: ["/writing-tools"],
  },
  {
    name: "Math Tools",
    href: "/math-tools",
    icon: null,
    includePrefixes: ["/math-tools"],
  },
];
