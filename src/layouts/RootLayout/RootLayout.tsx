import { memo } from "react";
import { IRootLayoutProps } from "./RootLayout.types";
import { Header } from "@/components";
import styles from "./styles.module.scss";
const RootLayout = memo<IRootLayoutProps>(({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
});

RootLayout.displayName = "RootLayout";

export default RootLayout;
