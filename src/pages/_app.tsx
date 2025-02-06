import { persistor, store } from "@/store";
import "@/styles/globals.scss";
import { CustomAppProps } from "@/types";
import { Router } from "next/router";
import NProgress from "nprogress";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "nprogress/nprogress.css";
import "@/styles/globals.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}{" "}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
