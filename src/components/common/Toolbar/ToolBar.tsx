import { memo } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { animateToolBar } from "@/animations";

export const ToolBar = memo<>(() => {
  return (
    <motion.div
      variants={animateToolBar}
      initial="initial"
      animate="animate"
      className={styles.toolbarWrapper}
    >
      <span>toolbar</span>
    </motion.div>
  );
});

ToolBar.displayName = "ToolBar";

export default ToolBar;
