import { memo } from 'react';
import { IToolbarButtonProps } from './ToolbarButton.types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { MotionButton } from '../MotionButton';
import { animateToolBar } from '@/animations';
import { CustomColorSwatch } from '../GeneralColorPicker/components';

import Image from 'next/image';
const ToolbarButton = memo<IToolbarButtonProps>(
  ({
    className,
    title,
    onClick,
    type,
    themePalette,
    icons = '',
    showTitle = true,
    index = 0,
  }) => (
    <MotionButton
      variants={animateToolBar}
      initial='initial'
      animate='animate'
      key={index}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={classNames(styles.toolbarBtnContainer, className)}
      onClick={onClick}
    >
      {type !== 'undo' && type !== 'redo' ? (
        <div className={styles.toolbarBtnContent}>
          <span>{title}</span>
          <CustomColorSwatch
            className={styles.colorSwatch}
            color={themePalette}
          />
        </div>
      ) : (
        <>
          {showTitle && <span>{title}</span>}

          <Image src={icons} alt='test' width={20} height={20} />
        </>
      )}
    </MotionButton>
  )
);

ToolbarButton.displayName = 'ToolbarButton';

export default ToolbarButton;
