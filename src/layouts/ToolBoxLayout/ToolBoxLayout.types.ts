import { INestedRoutesItems } from "@/configs";
import { ReactNode } from "react";

export interface IToolBoxLayoutProps {
  children: ReactNode;
  routes?: INestedRoutesItems[];
}
