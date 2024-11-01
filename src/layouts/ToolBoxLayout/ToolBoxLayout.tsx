import { memo } from "react";
import { IToolBoxLayoutProps } from "./ToolBoxLayout.types";

const ToolBoxLayout = memo<IToolBoxLayoutProps>(({ children }) => {
  return <div>{children}</div>;
});

ToolBoxLayout.displayName = "ToolBoxLayout";

export default ToolBoxLayout;
