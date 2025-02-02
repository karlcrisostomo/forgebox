import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import themeChanger from "./themeChanger/reducer";
import sessionStorage from "redux-persist/lib/storage/session";

const persistCofig = {
  key: "forgebox",
  storage: sessionStorage,
};
const rootReducer = combineReducers({
  themeChanger,
});

const persistedReducer = persistReducer(persistCofig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
