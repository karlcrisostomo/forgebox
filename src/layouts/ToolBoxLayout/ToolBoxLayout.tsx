import { memo } from "react";
import { IToolBoxLayoutProps } from "./ToolBoxLayout.types";
import SideBar from "@/components/Common/SideBar/SideBar";

const ToolBoxLayout = memo<IToolBoxLayoutProps>(({ children }) => {
  return (
    <div>
      <SideBar />

      {children}
    </div>
  );
});

ToolBoxLayout.displayName = "ToolBoxLayout";

export default ToolBoxLayout;
