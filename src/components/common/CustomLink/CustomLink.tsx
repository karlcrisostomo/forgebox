import { memo } from "react";
import { ICustomLinkProps } from "./CustomLink.types";
import Link from "next/link";
import getConfig from "next/config";

export const CustomLink = memo<ICustomLinkProps>(
  ({ children, href, as, ...props }) => {
    // 'as prop' let users see what are they supposed to see eg. /product/134
    const { basePath } = getConfig().publicRuntimeConfig;

    const prefixedHref = `${basePath}${href}`;
    const prefixedAs = as ? `${basePath}${as}` : as;

    return (
      <div>
        <Link href={prefixedHref} as={prefixedAs}>
          {children}
        </Link>
      </div>
    );
  }
);

export default CustomLink;
