import { memo } from 'react';
import { IMotionButtonProps } from './MotionButton.types';

import { motion } from 'framer-motion';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Image from 'next/image';

const MotionButton = memo<IMotionButtonProps>(
  ({ className, children, onClick, icon, ...props }) => (
    <motion.button
      onClick={onClick}
      className={classNames(styles.styledButton, className)}
      {...props}
    >
      <div>
        {icon && <Image src={icon} width={24} height={24} alt={icon} />}
        {children}
      </div>
    </motion.button>
  )
);

MotionButton.displayName = 'MotionButton';

export default MotionButton;
