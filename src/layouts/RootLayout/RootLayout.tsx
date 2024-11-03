import { memo } from "react";
import { IRootLayoutProps } from "./RootLayout.types";
import { Header } from "@/components";

const RootLayout = memo<IRootLayoutProps>(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});

RootLayout.displayName = "RootLayout";

export default RootLayout;
