import counterReducer from "@/store/counterReducer";
import themeChangerReducer from "@/store/themeChangerReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "forgebox-store",
  storage,
};

const persistedReducer = persistReducer(persistConfig, themeChangerReducer);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: persistedReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
