import { memo } from "react";
import {IRootLayoutProps } from "./RootLayout.types";

const RootLayout = memo<IRootLayoutProps>(({ children }) => {
  return <div>{children}</div>;
});

RootLayout.displayName = "RootLayout";

export default RootLayout;
