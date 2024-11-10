import { MotionProps } from "framer-motion";
import { MouseEventHandler, Ref } from "react";

export interface ICTAButtonProps extends MotionProps {
  icon?: string;
  classname?: string;
  alt: string;
  width: number;
  height: number;
  ref?: Ref<HTMLButtonElement>;
  onMouseDown: MouseEventHandler<HTMLButtonElement>;
  onMouseUp: MouseEventHandler<HTMLButtonElement>;
}
