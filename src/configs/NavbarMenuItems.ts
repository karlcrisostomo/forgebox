export interface INavbarMenuItem {
  name: string;
  href: string;
  includePrefixes: string[];
}

export const NavbarMenuItems: INavbarMenuItem[] = [
  {
    name: "Home",
    href: "/",
    includePrefixes: ["/"],
  },
  {
    name: "ToolBox",
    href: "/all-tools",
    includePrefixes: ["/all-tools"],
  },
];
