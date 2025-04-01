import { IGoogleFontsPayload } from "@/types";
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
  payload?: Partial<IGoogleFontsPayload>;
}

const getCurrentFonts = (state: IGoogleFontState) => ({
  headings: state.headings,
  body: state.body,
});

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
      const availableFonts = [...state.past, currentFonts];
      const randomIndex = Math.floor(Math.random() * availableFonts.length);

      return {
        ...state,
        ...availableFonts[randomIndex],
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
