import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import { memo } from "react";
import styles from "./styles.module.scss";
import { IPopoverProps } from "./GeneralPopover.types";

const Popover = memo<IPopoverProps>(({ trigger, children }) => (
  <PopoverRoot
    lazyMount
    unmountOnExit
    positioning={{ placement: "top", sameWidth: true }}
  >
    <PopoverTrigger asChild>{trigger}</PopoverTrigger>

    <PopoverContent className={styles.styledBody}>
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </PopoverRoot>
));

Popover.displayName = "Popover";

export default Popover;
