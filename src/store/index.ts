import counterReducer from "@/store/counterReducer";
import themeChangerReducer from "@/store/themeChangerReducer";
import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeChangerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
