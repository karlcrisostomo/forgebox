import { forwardRef } from "react";
import { ICTAButtonProps } from "./MotionButton.types";
import defaultIcon from "@/assets/default-icon.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss";
export const CTAButton = forwardRef<HTMLButtonElement, ICTAButtonProps>(
  (
    { classname, icon, alt, width, height, onMouseDown, onMouseUp, ...props },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        className={classNames(styles.styledButton, classname, {
          [styles.styledDisabled]: classname,
        })}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        {...props}
      >
        <Image
          className={classname}
          src={icon || defaultIcon}
          alt={alt}
          width={width}
          height={height}
          style={{ pointerEvents: "none" }}
        />
      </motion.button>
    );
  },
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
