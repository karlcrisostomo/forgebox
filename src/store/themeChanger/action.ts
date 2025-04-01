import { IThemeColors } from "@/types";
import {
  RANDOMIZE_COLORS,
  REDO_COLOR,
  TOGGLE_DARK_MODE,
  UNDO_COLOR,
  UPDATE_COLORS,
} from "./actionTypes";

export const updateColors = (colors: Partial<IThemeColors>) => ({
  type: UPDATE_COLORS,
  payload: colors,
});
export const randomizeColors = () => ({
  type: RANDOMIZE_COLORS,
});

export const undoColor = () => ({
  type: UNDO_COLOR,
});

export const redoColor = () => ({
  type: REDO_COLOR,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
