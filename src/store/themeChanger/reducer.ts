import { IThemeColors, IThemeState } from "@/types";
import { UnknownAction } from "redux";
import colors from "@/styles/_themeColor.module.scss";
import {
  RANDOMIZE_COLORS,
  REDO_COLOR,
  TOGGLE_DARK_MODE,
  UNDO_COLOR,
  UPDATE_COLORS,
} from "./actionTypes";
import { generateRandomColors } from "@/utils";
// import { generateRandomColors } from "@/utils";

const initialState: IThemeState = {
  text: colors.initialTextColor,
  accent: colors.accent,
  primary: colors.primary,
  secondary: colors.secondary,
  past: [],
  current: [],
  isDarkMode: false,
};

interface IColorAction extends UnknownAction {
  payload?: Partial<IThemeState>;
}

const getCurrentColors = (state: IThemeState): IThemeColors => ({
  text: state.text,
  accent: state.accent,
  primary: state.primary,
  secondary: state.secondary,
});

const reducer = (state = initialState, action: IColorAction) => {
  switch (action.type) {
    case UPDATE_COLORS: {
      if (!action.payload) return state;
      // Save to history only when color picker closes
      const currentColors = getCurrentColors(state);

      return {
        ...state,
        ...action.payload,
        past: [...state.past, currentColors],
        future: [],
      };
    }
    case RANDOMIZE_COLORS: {
      const currentColors = getCurrentColors(state);

      const colorKeys: (keyof IThemeColors)[] = [
        "text",
        "accent",
        "primary",
        "secondary",
      ];

      const newColors = colorKeys.reduce(
        (acc, color) => ({
          ...acc,
          [color]: generateRandomColors(),
        }),
        {} as IThemeColors,
      );

      return {
        ...state,
        ...newColors,
        past: [...state.past, currentColors],
        future: [],
      };
    }

    case UNDO_COLOR: {
      const previous = state.past[state.past.length - 1];
      if (!previous) return state;

      const currentColors = getCurrentColors(state);

      return {
        ...state,
        ...previous,
        past: state.past.slice(0, -1),
        current: [currentColors, ...state.current],
      };
    }
    case REDO_COLOR: {
      const next = state.current[0];
      if (!next) return state;

      const currentColors = getCurrentColors(state);

      return {
        ...state,
        ...next,
        past: [...state.past, currentColors],
        current: state.current.slice(1),
      };
    }

    case TOGGLE_DARK_MODE: {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
        past: [...state.past],
        future: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
