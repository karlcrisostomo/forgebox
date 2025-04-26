/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import {
  updateFonts,
  randomizeFonts,
  undoFonts,
  redoFonts,
} from "@/store/fontChanger/action";
import { IGoogleFont, IGoogleFontsPayload } from "@/types";
import { loadGoogleFont } from "@/utils";

export const useFontChange = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { headings, body, past, current } = useSelector(
    (state: RootState) => state.fontChanger,
  );

  const handleUpdateFonts = useCallback(
    (fonts: IGoogleFontsPayload) => {
      dispatch(updateFonts(fonts));
    },
    [dispatch],
  );

  const handleRandomizeFonts = useCallback(
    (availableFonts: IGoogleFont[]) => {
      if (availableFonts.length > 0) {
        // Dispatch the action with the available fonts
        dispatch(randomizeFonts(availableFonts));

        const state = (dispatch as any).getState?.();
        if (state?.fontChanger) {
          const { headings: newHeadings, body: newBody } = state.fontChanger;

          // Preload the selected fonts
          Promise.all([
            loadGoogleFont(newHeadings),
            loadGoogleFont(newBody),
          ]).catch((err) => console.error("Error loading fonts:", err));
        }
      }
    },
    [dispatch],
  );

  const handleUndo = useCallback(() => {
    if (past.length > 0) {
      dispatch(undoFonts());
    }
  }, [dispatch, past.length]);

  const handleRedo = useCallback(() => {
    if (current.length > 0) {
      dispatch(redoFonts());
    }
  }, [dispatch, current.length]);

  return {
    headings,
    body,
    past,
    current,
    updateFonts: handleUpdateFonts,
    randomizeFonts: handleRandomizeFonts,
    undoFont: handleUndo,
    redoFont: handleRedo,
    canUndo: past.length > 0,
    canRedo: current.length > 0,
  } as const;
};
