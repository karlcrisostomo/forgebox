import { memo } from 'react';
import { IToolbarButtonProps } from './ToolbarButton.types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { MotionButton } from '../MotionButton';
import { animateToolBar } from '@/animations';
const ToolbarButton = memo<IToolbarButtonProps>(
  ({ className, title, isActive, onClick, themePalette, index = 0 }) => (
    <MotionButton
      variants={animateToolBar}
      initial='initial'
      animate='animate'
      key={index}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={classNames(styles.toolbarBtnContainer, className, {
        [styles.active]: isActive,
      })}
      style={{ backgroundColor: themePalette }}
      onClick={onClick}
    >
      <span>{title}</span>
    </MotionButton>
  )
);

ToolbarButton.displayName = 'ToolbarButton';

export default ToolbarButton;
