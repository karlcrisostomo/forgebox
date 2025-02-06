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
    name: "All Tools",
    href: "/all-tools",
    icon: null,
    includePrefixes: ["/all-tools"],
  },
  {
    name: "Design Tools",
    href: "/all-tools/design-tools",
    icon: null,
    includePrefixes: ["/all-tools/design-tools"],
  },
  {
    name: "Image Tools",
    href: "/all-tools/image-tools",
    icon: null,
    includePrefixes: ["/all-tools/image-tools"],
  },
  {
    name: "Marketing Tools",
    href: "/all-tools/marketing-tools",
    icon: null,
    includePrefixes: ["/all-tools/marketing-tools"],
  },
  {
    name: "Social Tools",
    href: "/all-tools/social-tools",
    icon: null,
    includePrefixes: ["/all-tools/social-tools"],
  },
  {
    name: "Dev Tools",
    href: "/all-tools/dev-tools",
    icon: null,
    includePrefixes: ["/all-tools/dev-tools"],
  },
  {
    name: "Color Tools",
    href: "/all-tools/color-tools",
    icon: null,
    includePrefixes: ["/all-tools/color-tools"],
  },
  {
    name: "writing Tools",
    href: "/all-tools/writing-tools",
    icon: null,
    includePrefixes: ["/all-tools/writing-tools"],
  },
  {
    name: "Math Tools",
    href: "/all-tools/math-tools",
    icon: null,
    includePrefixes: ["/all-tools/math-tools"],
  },
];
