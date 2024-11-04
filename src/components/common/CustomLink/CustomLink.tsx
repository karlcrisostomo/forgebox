import { memo } from "react";
import { ICustomLinkProps } from "./CustomLink.types";
import Link from "next/link";

export const CustomLink = memo<ICustomLinkProps>(
  ({ children, href, as, ...props }) => {
    //we leave this for now
    // const { basePath } = getConfig().publicRuntimeConfig;

    // const prefixedHref = `${basePath}${href}`;
    // const prefixedAs = as ? `${basePath}${as}` : as;

    return (
      <div>
        <Link href={href} as={as} {...props}>
          {children}
        </Link>
      </div>
    );
  },
);

CustomLink.displayName = "CustomLink";
export default CustomLink;
