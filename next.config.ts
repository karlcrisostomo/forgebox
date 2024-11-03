import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // added a basepath for eg. /forgeBox/Home

  publicRuntimeConfig: {
    basePath: "/forgeBox",
  },
  assetPrefix: "/forgeBox",
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
