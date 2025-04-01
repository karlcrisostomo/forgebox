import { INestedRoutesItems } from "@/configs";
import { memo, useMemo } from "react";
import { CustomLink } from "../CustomLink";
import styles from "./styles.module.scss";
import { ICardNavigationProps } from "./CardNavigation.types";
import classNames from "classnames";

const CardNavigation = memo<ICardNavigationProps>(
  ({ nestedRoutes, className }) => {
    const renderNestedLinks = useMemo(
      () => (items: INestedRoutesItems[]) =>
        items.map(({ name, href }) => {
          return (
            <CustomLink prefetch shallow href={href} key={name}>
              {name}
            </CustomLink>
          );
        }),
      [],
    );
    return (
      <div className={classNames(styles.container, className)}>
        {renderNestedLinks(nestedRoutes)}
      </div>
    );
  },
);

CardNavigation.displayName = "CardNavigation";

export default CardNavigation;
