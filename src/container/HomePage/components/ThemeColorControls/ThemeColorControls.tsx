import { useThemeChange } from "@/hooks";
import { memo, useCallback } from "react";
import { ThemeColorType } from "@/types";
import { IThemeColorControlsProps } from "./ThemeColorControls.types";
import { THEME_BUTTONS } from "@/constants";
import { GeneralColorPicker, MotionButton, ThemeButton } from "@/components";
import { GeneralPopover } from "@/components/common/GeneralPopover";
import { Box } from "@chakra-ui/react";
import { FaUndo, FaRedo } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaDiceFive } from "react-icons/fa6";
import styles from "./styles.module.scss";

// interface ColorPickerPosition {
//   x: number;
//   y: number;
// }

const ThemeColorControls = memo<IThemeColorControlsProps>(() => {
  const { redoColor, undoColor, toggleDarkMode, randomizeColors } =
    useThemeChange();

  // const [position, setPosition] = useState<ColorPickerPosition>({ x: 0, y: 0 });

  // const actionsMap = useMemo(
  //   () => ({
  //     undo: undoColor,
  //     redo: redoColor,
  //     darkMode: toggleDarkMode,
  //     randomColor: randomizeColors,
  //   }),
  //   [undoColor, redoColor, toggleDarkMode, randomizeColors]
  // );

  // const colorsMap = useMemo(
  //   () => ({
  //     primary,
  //     secondary,
  //     text,
  //     accent,
  //   }),
  //   [primary, secondary, text, accent]
  // );

  const renderButton = useCallback((button: (typeof THEME_BUTTONS)[number]) => {
    return (
      <GeneralPopover
        key={button.id}
        trigger={
          <MotionButton>
            <ThemeButton
              title={button.title}
              // themePalette={colorsMap[button.id as keyof typeof colorsMap]}
            />
          </MotionButton>
        }
      >
        <GeneralColorPicker colorType={button.id as ThemeColorType} />
      </GeneralPopover>
    );
  }, []);
  return (
    <Box gap="4" display="flex">
      {THEME_BUTTONS.map((button) => renderButton(button))}

      {/*undo color button  */}
      <MotionButton className={styles.motionButton} onClick={undoColor}>
        <FaUndo size={18} />
        {/*redo color button  */}
      </MotionButton>
      <MotionButton className={styles.motionButton} onClick={redoColor}>
        <FaRedo size={18} />
        {/*dark mode toggle  */}
      </MotionButton>
      <MotionButton className={styles.motionButton} onClick={toggleDarkMode}>
        {/*random color button  */}
        <MdDarkMode size={18} />
      </MotionButton>
      <MotionButton className={styles.motionButton} onClick={randomizeColors}>
        <FaDiceFive size={18} />
      </MotionButton>
    </Box>
  );
});

ThemeColorControls.displayName = "ThemeColorControls";

export default ThemeColorControls;
