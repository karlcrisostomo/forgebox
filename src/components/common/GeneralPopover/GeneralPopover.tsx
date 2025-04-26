import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import { memo } from "react";
import styles from "./styles.module.scss";
import { IPopoverProps } from "./GeneralPopover.types";

const Popover = memo<IPopoverProps>(({ trigger, children, ...props }) => (
  <PopoverRoot
    lazyMount
    unmountOnExit
    positioning={{
      placement: "top",
      sameWidth: true,
      offset: { mainAxis: 16 },
      strategy: "fixed",
    }}
  >
    <PopoverTrigger asChild>{trigger}</PopoverTrigger>

    <PopoverContent className={styles.styledBody}>
      <PopoverBody {...props}>{children}</PopoverBody>
    </PopoverContent>
  </PopoverRoot>
));

Popover.displayName = "Popover";

export default Popover;
