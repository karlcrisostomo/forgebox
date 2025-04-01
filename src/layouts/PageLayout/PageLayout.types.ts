import { INestedRoutesItems } from "@/configs";
import { ReactNode } from "react";

export interface IPageLayoutProps {
  children: ReactNode;
  routes: INestedRoutesItems[];
}
