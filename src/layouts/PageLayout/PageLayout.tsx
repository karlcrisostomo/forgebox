import { memo } from "react";
import styles from "./styles.module.scss";
import { IPageLayoutProps } from "./PageLayout.types";
import { CardNavigation } from "@/components/common";

const PageLayout = memo<IPageLayoutProps>(({ children, routes }) => {
  return (
    <div className={styles.pageLayout}>
      <>{children}</>
      {routes && <CardNavigation nestedRoutes={routes} />}
    </div>
  );
});

PageLayout.displayName = "PageLayout";

export default PageLayout;
