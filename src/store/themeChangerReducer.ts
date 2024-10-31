import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  backgroundColor: string;
}

const initialState: themeState = {
  backgroundColor: "#ffffff",
};

const themeChangerReducer = createSlice({
  name: "theme",
  initialState,

  reducers: {
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBackgroundColor } = themeChangerReducer.actions;
export default themeChangerReducer.reducer;
