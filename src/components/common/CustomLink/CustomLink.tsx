import { memo } from "react";
import { ICustomLinkProps } from "./CustomLink.types";
import Link from "next/link";


export const CustomLink = memo<ICustomLinkProps>(
  ({ children, href, as, ...props }) => {

    //we dont need this for now
    // 'as prop' let users see what are they supposed to see eg. /product/134
    // const { basePath } = getConfig().publicRuntimeConfig;

    // const prefixedHref = `${basePath}${href}`;
    // const prefixedAs = as ? `${basePath}${as}` : as;

    return (
      <div>
        <Link href={href} as={as} {...props} >
          {children}
        </Link>
      </div>
    );
  }
);

CustomLink.displayName = "CustomLink";
export default CustomLink;
