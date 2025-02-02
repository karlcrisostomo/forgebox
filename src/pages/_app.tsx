import { persistor, store } from "@/store";
import "@/styles/globals.scss";
import { CustomAppProps } from "@/types";
import { Router } from "next/router";
import NProgress from "nprogress";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "nprogress/nprogress.css";
import "@/styles/globals.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {getLayout(<Component {...pageProps} />)}{" "}
      </PersistGate>
    </Provider>
  );
}
