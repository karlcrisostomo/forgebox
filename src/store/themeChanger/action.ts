import { IThemeColors } from "@/types";
import {
  RANDOMIZE_COLORS,
  REDO_COLOR,
  TOGGLE_DARK_MODE,
  UNDO_COLOR,
  UPDATE_COLORS,
} from "./actionTypes";

export const updateColors = (
  payload: IThemeColors,
  isFinal: boolean = true,
) => ({
  type: UPDATE_COLORS,
  payload,
  isFinal,
});
export const randomizeColors = (payload: IThemeColors) => ({
  type: RANDOMIZE_COLORS,
  payload,
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
