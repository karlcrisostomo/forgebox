import { memo } from "react";
import { IToolBoxLayoutProps } from "./ToolBoxLayout.types";
import { RootLayout } from "../RootLayout";
import { CardNavigation, SideBar } from "@/components";

const ToolBoxLayout = memo<IToolBoxLayoutProps>(({ children, routes }) => {
  return (
    <RootLayout>
      <SideBar />
      {children}
      {routes && <CardNavigation nestedRoutes={routes} />}
    </RootLayout>
  );
});

ToolBoxLayout.displayName = "ToolBoxLayout";

export default ToolBoxLayout;
