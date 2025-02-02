import { memo, useCallback } from 'react';
import { IColorFieldSelectorProps } from './ColorFieldSelector.types';
import { IColorSpace } from '@/types';
import styles from './styles.module.scss';
import { AnimatePresence } from 'framer-motion';
import { MotionButton } from '@/components/Common/MotionButton';
import unfoldMoreIcon from '@/assets/icons/unfold-more-icon.svg';

const ColorFieldSelector = memo<IColorFieldSelectorProps>(
  ({ options, value, onChange }) => {
    const handleClick = useCallback(() => {
      const currentIndex = options.indexOf(value as IColorSpace);
      const nextIndex = (currentIndex + 1) % options.length; // cycle through options; let say u're in the last index eg., 3 % options.length(3) = 0
      onChange(options[nextIndex]);
    }, [options, value, onChange]);

    return (
      <div className={styles.selectorContainer}>
        <AnimatePresence mode='wait'>
          <MotionButton
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -4, opacity: 0 }}
            className={styles.selectorButton}
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
            icon={unfoldMoreIcon}
          >
            {value.toUpperCase()}
          </MotionButton>
        </AnimatePresence>
      </div>
    );
  }
);

ColorFieldSelector.displayName = 'ColorFieldSelector';

export default ColorFieldSelector;
