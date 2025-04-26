import { PopoverContentProps } from "@chakra-ui/react";
import { IMotionButtonProps } from "../MotionButton";

export interface IPopoverProps extends PopoverContentProps {
  children?: React.ReactNode;
  trigger?: React.ReactElement<IMotionButtonProps>;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
