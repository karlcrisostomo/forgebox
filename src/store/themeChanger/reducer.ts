import { IThemeColors, IThemeState } from "@/types";
import { UnknownAction } from "redux";
import colors from "@/styles/_themeColor.module.scss";
import {
  REDO_COLOR,
  TOGGLE_DARK_MODE,
  UNDO_COLOR,
  UPDATE_COLORS,
} from "./actionTypes";
// import { generateRandomColors } from "@/utils";

const initialState: IThemeState = {
  textColor: colors.initialTextColor,
  accentColor: colors.accent,
  primaryColor: colors.primary,
  secondaryColor: colors.secondary,
  past: [],
  current: [],
  isDarkMode: false,
};

interface IColorAction extends UnknownAction {
  payload?: Partial<IThemeState>;
}

const getCurrentColors = (state: IThemeState): IThemeColors => ({
  textColor: state.textColor,
  accentColor: state.accentColor,
  primaryColor: state.primaryColor,
  secondaryColor: state.secondaryColor,
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
    // case RANDOMIZE_COLORS: {
    //     const currentColors: IThemeColors = {
    //         textColor: state.textColor,
    //         accentColor: state.accentColor,
    //         primaryColor: state.primaryColor,
    //         secondaryColor: state.secondaryColor,
    //     };

    //     const colorKeys: (keyof IThemeColors)[] = [
    //         'textColor',
    //         'accentColor',
    //         'primaryColor',
    //         'secondaryColor'
    //     ];

    //     const newColors = colorKeys.reduce((acc, color) => ({
    //         ...acc,
    //         [color]: generateRandomColors()
    //     }), {} as IThemeColors);

    //     return {
    //         ...state,
    //         ...newColors,
    //         past: [...state.past, currentColors],
    //         future: []
    //     };
    // }

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
