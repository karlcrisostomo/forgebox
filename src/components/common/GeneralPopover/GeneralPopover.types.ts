import { IMotionButtonProps } from "../MotionButton";

export interface IPopoverProps {
  children?: React.ReactNode;
  className?: string;
  trigger?: React.ReactElement<IMotionButtonProps>;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
