import { IToolBoxMenuItem, ToolBoxMenuItems } from "@/configs";
import { useRouter } from "@/hooks";

import { memo, useMemo } from "react";
// just assume that toolbox page has sidebar
export const SideBar = memo(() => {
  const { pathname } = useRouter();

  const renderLinks = useMemo(
    () => (items: IToolBoxMenuItem[]) =>
      items.map(({ name, href, icon, includePrefixes }) => {
        const currentLink = includePrefixes.some((prefix) =>
          pathname.includes(prefix)
        );
        return <div></div>;
      }),
    []
  );

  return <div>{renderLinks(ToolBoxMenuItems)}</div>;
});

SideBar.displayName = "SideBar";
export default SideBar;
