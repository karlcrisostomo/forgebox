import { IToolBoxMenuItem, ToolBoxMenuItems } from "@/configs";

import { memo, useMemo } from "react";
import CustomLink from "../CustomLink/CustomLink";
// just assume that toolbox page has sidebar
export const SideBar = memo(() => {
  // const { pathname } = useRouter();

  const renderLinks = useMemo(
    () => (items: IToolBoxMenuItem[]) =>
      items.map(({ name, href, icon }) => {
        //leave it for now this for styles current page
        // const currentLink = includePrefixes.some((prefix) =>
        //   pathname.includes(prefix)
        // );
        return (
          <CustomLink prefetch shallow href={href} key={name} className="">
            {icon}
            <div>{name}</div>
          </CustomLink>
        );
      }),
    []
  );

  return <div>{renderLinks(ToolBoxMenuItems)}</div>;
});

SideBar.displayName = "SideBar";
export default SideBar;
