import { memo } from "react";
import { IToolBoxLayoutProps } from "./ToolBoxLayout.types";
import { RootLayout } from "../RootLayout";
import { SideBar } from "@/components";

const ToolBoxLayout = memo<IToolBoxLayoutProps>(({ children }) => {
  return (
    <RootLayout>
      <SideBar />
      {children}
    </RootLayout>
  );
});

ToolBoxLayout.displayName = "ToolBoxLayout";

export default ToolBoxLayout;
