
import { store } from "@/store";
import "@/styles/globals.scss";
import { CustomAppProps } from "@/types";

import { ReactElement } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
