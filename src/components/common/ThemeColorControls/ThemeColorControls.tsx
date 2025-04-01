import { useThemeChange } from "@/hooks";
import { memo, useCallback, useMemo } from "react";
import { MotionButton } from "../MotionButton";

import { GeneralColorPicker } from "../GeneralColorPicker";
import { ThemeColorType } from "@/types";
import { IThemeColorControlsProps } from "./ThemeColorControls.types";
import { ThemeButton } from "../ThemeButton";
import { GeneralPopover } from "../GeneralPopover";
import { THEME_BUTTONS } from "@/constants";

// interface ColorPickerPosition {
//   x: number;
//   y: number;
// }

const ThemeColorControls = memo<IThemeColorControlsProps>(() => {
  const {
    redoColor,
    undoColor,
    toggleDarkMode,
    randomizeColors,
    primary,
    secondary,
    text,
    accent,
  } = useThemeChange();

  // const [position, setPosition] = useState<ColorPickerPosition>({ x: 0, y: 0 });

  const actionsMap = useMemo(
    () => ({
      undo: undoColor,
      redo: redoColor,
      darkMode: toggleDarkMode,
      randomColor: randomizeColors,
    }),
    [undoColor, redoColor, toggleDarkMode, randomizeColors],
  );

  const colorsMap = useMemo(
    () => ({
      primary,
      secondary,
      text,
      accent,
    }),
    [primary, secondary, text, accent],
  );

  const renderButton = useCallback(
    (button: (typeof THEME_BUTTONS)[number]) => {
      if (button.type === "utility") {
        return (
          <MotionButton
            key={button.id}
            onClick={() => actionsMap[button.id as keyof typeof actionsMap]?.()}
          >
            {button.title}
          </MotionButton>
        );
      }

      return (
        <GeneralPopover
          key={button.id}
          trigger={
            <MotionButton>
              <ThemeButton
                title={button.title}
                themePalette={colorsMap[button.id as keyof typeof colorsMap]}
              />
            </MotionButton>
          }
        >
          <GeneralColorPicker colorType={button.id as ThemeColorType} />
        </GeneralPopover>
      );
    },
    [actionsMap, colorsMap],
  );
  return <div>{THEME_BUTTONS.map((button) => renderButton(button))}</div>;
});

ThemeColorControls.displayName = "ThemeColorControls";

export default ThemeColorControls;
