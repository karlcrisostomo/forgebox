import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface ICustomLinkProps extends LinkProps {
  as?: string;
  className: string;
  children: ReactNode;
}
