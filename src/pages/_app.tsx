import "@/styles/globals.scss";
import { CustomAppProps } from "@/types";

import { ReactElement } from "react";

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return getLayout(<Component {...pageProps} />);
}
