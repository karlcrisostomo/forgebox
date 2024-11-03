import { base } from "framer-motion/client";
import { url } from "inspector";
import getConfig from "next/config";
import { NextRouter, useRouter as useNextRouter } from "next/router";
import { useMemo } from "react";
import { UrlObject } from "url";

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}
interface WrappedRouter extends NextRouter {
  push: (url: Url, as?: Url, options?: TransitionOptions) => Promise<boolean>;
  replace: (
    url: Url,
    as?: Url,
    options?: TransitionOptions
  ) => Promise<boolean>;
  pathname: string;
  asPath: string;
  route: string;
}

type Url = UrlObject | string;
export const useRouter = () => {
  const router = useNextRouter();

  const { publicRuntimeConfig } = getConfig();

  const basePath = publicRuntimeConfig?.basePath || "";

  const addBasePath = (path: Url | undefined): Url | undefined => {
    if (typeof path === "string") {
      return `${basePath}${path}`;
    }
    if (path) {
      return {
        ...path,
        pathname: path.pathname
          ? `${basePath}${path.pathname}`
          : `${basePath}${router.pathname}`,
      };
    }
    return path;
  };

  const wrappedRouter: WrappedRouter = useMemo(
    () => ({
      ...router,
      push: (url, as, options) =>
        router.push(addBasePath(url) as Url, addBasePath(as), options),
      asPath: router.asPath.startsWith(basePath)
        ? router.asPath.slice(basePath.length)
        : router.asPath,
      route: router.route.startsWith(basePath)
        ? router.route.slice(basePath.length)
        : router.route,
    }),
    [router]
  );


  return wrappedRouter

};

export default useRouter;
