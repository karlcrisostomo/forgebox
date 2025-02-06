import { MotionProps } from 'framer-motion';
import { MouseEvent } from 'react';

export interface IMotionButtonProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  index?: number;
}
