import { NextPageWithLayout } from "@/types";
import styles from "./styles.module.scss";
import { RootLayout } from "@/layouts/RootLayout";
import { DraggableToolBar } from "@/components";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <DraggableToolBar toolbarHeight={50} />
    </div>
  );
};

HomePage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default HomePage;
