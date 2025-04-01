import { IGoogleFontsPayload } from "@/types";
import {
  RANDOMIZE_FONTS,
  REDO_FONT,
  UNDO_FONT,
  UPDATE_FONTS,
} from "./actionTypes";

export const updateFonts = (fonts: IGoogleFontsPayload) => ({
  type: UPDATE_FONTS,
  payload: fonts,
});

export const randomizeFonts = () => ({
  type: RANDOMIZE_FONTS,
});

export const undoFonts = () => ({
  type: UNDO_FONT,
});

export const redoFonts = () => ({
  type: REDO_FONT,
});
