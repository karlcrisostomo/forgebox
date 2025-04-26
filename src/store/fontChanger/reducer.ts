import { IGoogleFont, IGoogleFontsPayload } from "@/types";
import { UnknownAction } from "redux";
import {
  UPDATE_FONTS,
  RANDOMIZE_FONTS,
  UNDO_FONT,
  REDO_FONT,
} from "./actionTypes";

interface IFonts {
  body: string;
  headings: string;
}

interface IGoogleFontState {
  headings: string;
  body: string;
  past: IFonts[];
  current: IFonts[];
}

const initialState: IGoogleFontState = {
  headings: "Poppins",
  body: "Helvetica",
  past: [],
  current: [],
};

interface IFontAction extends UnknownAction {
  payload?: Partial<IGoogleFontsPayload> & { availableFonts?: IGoogleFont[] };
}

const getCurrentFonts = (state: IGoogleFontState) => ({
  headings: state.headings,
  body: state.body,
});

const getRandomFont = (
  availableFonts: IGoogleFont[],
  currentFont: string,
): string => {
  if (!availableFonts || availableFonts.length === 0) {
    return currentFont; // Fallback to current if no fonts available
  }

  // Filter out the current font to ensure we get a different one
  const filteredFonts = availableFonts.filter(
    (font) => font.family !== currentFont,
  );

  // If all fonts are filtered out, return the current font
  if (filteredFonts.length === 0) {
    return currentFont;
  }

  // Select a random font from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredFonts.length);
  return filteredFonts[randomIndex].family || currentFont;
};

const reducer = (state = initialState, action: IFontAction) => {
  switch (action.type) {
    case UPDATE_FONTS: {
      if (!action.payload) return state;
      const currentFonts = getCurrentFonts(state);

      return {
        ...state,
        ...action.payload,
        past: [...state.past, currentFonts],
        current: [],
      };
    }

    case RANDOMIZE_FONTS: {
      const currentFonts = getCurrentFonts(state);
      const availableFonts = action.payload?.availableFonts || [];

      if (availableFonts.length === 0) return state;

      const randomHeadings = getRandomFont(
        availableFonts,
        currentFonts.headings,
      );

      const randomBody = getRandomFont(availableFonts, currentFonts.body);

      return {
        ...state,
        headings: randomHeadings,
        body: randomBody,
        past: [...state.past, currentFonts],
        current: [],
      };
    }

    case UNDO_FONT: {
      const previous = state.past[state.past.length - 1];
      if (!previous) return state;

      const newPast = state.past.slice(0, -1);

      return {
        ...state,
        ...previous,
        past: newPast,
        current: [getCurrentFonts(state), ...state.current],
      };
    }

    case REDO_FONT: {
      const next = state.current[0];
      const newCurrent = state.current.slice(1);

      return {
        ...state,
        ...next,
        past: [...state.past, getCurrentFonts(state)],
        current: newCurrent,
      };
    }

    default:
      return state;
  }
};

export default reducer;
