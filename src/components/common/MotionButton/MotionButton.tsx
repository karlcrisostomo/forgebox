import { memo } from "react";
import { IMotionButtonProps } from "./MotionButton.types";

import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./styles.module.scss";

const MotionButton = memo<IMotionButtonProps>(
  ({ className, children, onClick, ...props }) => (
    <motion.button
      onClick={onClick}
      className={classNames(styles.styledButton, className)}
      {...props}
    >
      <div>{children}</div>
    </motion.button>
  ),
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
