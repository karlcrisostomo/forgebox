import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import colors from "@/styles/_themeColor.module.scss";
import { IThemeState } from "@/types";
import { generateRandomColors } from "@/utils";

const initialThemeState: IThemeState = {
  textColor: colors.initialTextColor,
  accentColor: colors.accent,
  primaryColor: colors.primary,
  secondaryColor: colors.secondary,
  past: [],
  future: [],
};

export const themeChangerSlice = createSlice({
  name: "themeChanger",
  initialState: initialThemeState,

  reducers: {
    updateColors: (state, action: PayloadAction<Partial<IThemeState>>) => {
      const { ...payload } = state;
      state.past.push({ ...payload });
      state.future = [];
      Object.assign(state, action.payload);
    },

    randomizeColors: (state) => {
      const { ...payload } = state;
      state.past.push({ ...payload });
      state.future = [];

      const colorKeys = [
        "textColor",
        "accentColor",
        "primaryColor",
        "secondaryColor",
      ] as const;

      colorKeys.forEach((color) => {
        state[color] = generateRandomColors();
      });
    },
  },
});

export const { updateColors, randomizeColors } = themeChangerSlice.actions;

export default themeChangerSlice.reducer;
