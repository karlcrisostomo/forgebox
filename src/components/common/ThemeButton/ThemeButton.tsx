import { memo } from "react";
import { IThemeButtonProps } from "./ThemeButton.types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { MotionButton } from "@/components/common";
import { animateToolBar } from "@/animations";
import { CustomColorSwatch } from "@/components/common/GeneralColorPicker/components";

const ThemeButton = memo<IThemeButtonProps>(
  ({ className, title, themePalette, index = 0 }) => (
    <MotionButton
      variants={animateToolBar}
      initial="initial"
      animate="animate"
      key={index}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={classNames(styles.toolbarBtnContainer, className)}
    >
      <div className={styles.toolbarBtnContent}>
        <span>{title}</span>
        <CustomColorSwatch
          className={styles.colorSwatch}
          color={themePalette}
        />
      </div>
    </MotionButton>
  ),
);

ThemeButton.displayName = "ThemeButton";

export default ThemeButton;
