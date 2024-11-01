import { IToolBoxMenuItem, ToolBoxMenuItems } from "@/configs";
import { memo, useMemo } from "react";
// just assume that toolbox page has sidebar 
export const SideBar = memo(() => {
  const renderLinks = useMemo(
    () => (items: IToolBoxMenuItem[]) =>
      items.map(({ name, href, icon }) => {
        return <div></div>;
      }),
    []
  );

  return <div>{renderLinks(ToolBoxMenuItems)}</div>;
});

SideBar.displayName = "SideBar";
export default SideBar;