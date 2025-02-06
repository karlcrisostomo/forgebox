import { memo } from "react";
import { IToolBoxLayoutProps } from "./ToolBoxLayout.types";
import SideBar from "@/components/Common/SideBar/SideBar";
import { RootLayout } from "../RootLayout";

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
