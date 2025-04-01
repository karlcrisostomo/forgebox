import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  updateColors,
  undoColor,
  redoColor,
  toggleDarkMode,
  randomizeColors,
} from "@/store/themeChanger/action";
import { IThemeColors } from "@/types";

import { parseColors } from "@/utils";

export const useThemeChange = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { text, accent, primary, secondary, past, current, isDarkMode } =
    useSelector((state: RootState) => state.themeChanger);

  const convertedColors = useMemo(
    () => ({
      text: parseColors(text),
      accent: parseColors(accent),
      primary: parseColors(primary),
      secondary: parseColors(secondary),
    }),
    [text, accent, primary, secondary],
  );

  const handleUpdateColors = useCallback(
    (colors: Partial<IThemeColors>) => {
      dispatch(updateColors(colors));
    },
    [dispatch],
  );

  const handleRandomizeColors = useCallback(() => {
    dispatch(randomizeColors());
  }, [dispatch]);

  const handleUndo = useCallback(() => {
    if (past.length > 0) {
      dispatch(undoColor());
    }
  }, [dispatch, past.length]);

  const handleRedo = useCallback(() => {
    if (current.length > 0) {
      dispatch(redoColor());
    }
  }, [dispatch, current.length]);

  const handleToggleDarkMode = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);
  return {
    ...convertedColors,
    past,
    current,
    updateColors: handleUpdateColors,
    undoColor: handleUndo,
    redoColor: handleRedo,
    canUndo: past.length > 0,
    canRedo: current.length > 0,
    isDarkMode,
    toggleDarkMode: handleToggleDarkMode,
    randomizeColors: handleRandomizeColors,
  } as const;
};
