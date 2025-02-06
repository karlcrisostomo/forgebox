import { memo, useMemo } from "react";
import { CustomLink } from "../CustomLink";
import { INavbarMenuItem, NavbarMenuItems } from "@/configs";

export const Header = memo(() => {
  const navBarLinks = useMemo(
    () => (items: INavbarMenuItem[]) =>
      items.map(({ name, href }) => {
        return (
          <CustomLink key={name} href={href} className="">
            {name}
          </CustomLink>
        );
      }),
    [],
  );

  return <div> {navBarLinks(NavbarMenuItems)}</div>;
});

Header.displayName = "Header";

export default Header;
