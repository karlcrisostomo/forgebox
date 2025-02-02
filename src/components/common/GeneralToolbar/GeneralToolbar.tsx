import { memo, useCallback, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { ThemeColorType } from '@/types';
import { ToolbarButton } from '../ToolbarButton';
import { GeneralColorPicker } from '../GeneralColorPicker';
import { useClickOutside, useThemeChange } from '@/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { THEME_BUTTONS } from '@/constants/ThemeButton';
import { MotionButton } from '../MotionButton';

const GeneralToolbar = memo(() => {
  const [activeColor, setActiveColor] = useState<ThemeColorType | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    primaryColor,
    secondaryColor,
    accentColor,
    textColor,
    undoColor,
    redoColor,
    isDarkMode,
    toggleDarkMode,
  } = useThemeChange();

  const getColorByType = useMemo(
    () => ({
      primary: primaryColor,
      secondary: secondaryColor,
      accent: accentColor,
      text: textColor,
    }),
    [accentColor, primaryColor, secondaryColor, textColor]
  );

  const handleButtonClick = useCallback(
    (type: ThemeColorType, event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setPosition({
        x: rect.left,
        y: rect.bottom + 10,
      });
      setActiveColor((prev) => (prev === type ? null : type));
    },
    []
  );

  useClickOutside(containerRef, () => setActiveColor(null));

  return (
    <>
      <div className={styles.toolBarContainer}>
        {THEME_BUTTONS.map(({ type, title }, idx) => (
          <div key={title} className={styles.buttonWrapper}>
            <ToolbarButton
              key={type}
              themePalette={getColorByType[type]}
              title={title}
              isActive={activeColor === type}
              onClick={(e) => handleButtonClick(type, e)}
              index={idx}
            />
            <AnimatePresence>
              {activeColor === type && (
                <motion.div
                  ref={containerRef}
                  className={styles.pickerWrapper}
                  initial={{ opacity: 0, bottom: 0, left: 0 }}
                  animate={{ opacity: 1, top: '-450px', left: 0 }} // temporary top position
                  exit={{ opacity: 1, bottom: 0 }}
                  style={{
                    left: position.x,
                    top: position.y,
                  }}
                >
                  <GeneralColorPicker
                    colorType={activeColor}
                    isOpen={true}
                    onClose={() => setActiveColor(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <MotionButton onClick={toggleDarkMode}>
          {isDarkMode ? 'Dark' : 'Light'}
        </MotionButton>

        <MotionButton onClick={undoColor} whileTap={{ scale: 0.95 }}>
          Undo
        </MotionButton>

        <MotionButton onClick={redoColor} whileTap={{ scale: 0.95 }}>
          Redo
        </MotionButton>
      </div>
    </>
  );
});
GeneralToolbar.displayName = 'GeneralToolbar';

export default GeneralToolbar;
