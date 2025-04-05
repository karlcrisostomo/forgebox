import { memo } from "react";
import styles from "./styles.module.scss";
import { IPageLayoutProps } from "./PageLayout.types";

const PageLayout = memo<IPageLayoutProps>(({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <>{children}</>
    </div>
  );
});

PageLayout.displayName = "PageLayout";

export default PageLayout;
