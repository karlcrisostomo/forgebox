import { ToolBoxLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";
import styles from "./styles.module.scss";
import { useCategory } from "./hooks";
export const Categories: NextPageWithLayout = () => {
  const { category } = useCategory();

  return <div className={styles.container}>{category}</div>;
};

Categories.getLayout = (page) => <ToolBoxLayout>{page}</ToolBoxLayout>;

export default Categories;
