import { memo, useCallback, useMemo } from 'react';
import { Color, parseColor } from 'react-aria-components';
import styles from './styles.module.scss';
import {
  CustomColorArea,
  CustomColorField,
  CustomColorSlider,
  EyeDropperButton,
} from './components';
import { useThemeChange } from '@/hooks';
import { IThemeColors } from '@/types';
import { IColorPickerProps } from './GeneralColorPicker.types';
import CustomColorSwatch from './components/CustomColorSwatch/CustomColorSwatch';

const GeneralColorPicker = memo<IColorPickerProps>(({ colorType, isOpen }) => {
  const { updateColors, primaryColor, secondaryColor, accentColor, textColor } =
    useThemeChange();
  const currentColor = useMemo(
    () =>
      ({
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor,
        text: textColor,
      })[colorType],
    [colorType, primaryColor, secondaryColor, accentColor, textColor]
  );

  const handleColorChange = useCallback(
    (color: Color | null) => {
      if (!color) return;
      const colorStr = color.toString('hsl');
      const colorKey = `${colorType}Color` as keyof IThemeColors;
      updateColors({ [colorKey]: colorStr });
    },
    [updateColors, colorType]
  );
  
  const handleEyeDropper = useCallback(async () => {
    try {
      if (!window.EyeDropper) return;
      const dropper = new window.EyeDropper();
      const { sRGBHex } = await dropper.open();
      const color = parseColor(sRGBHex).toFormat('hsl');
      handleColorChange(color);
    } catch (e) {
      console.error('EyeDropper failed:', e);
    }
  }, [handleColorChange]);

  if (!isOpen) return null;

  return (
    <div className={styles.generalColorPickerWrapper}>
      <CustomColorArea value={currentColor} onChange={handleColorChange} />
      <CustomColorSlider
        value={currentColor}
        channel='hue'
        onChange={handleColorChange}
      />

      <CustomColorField value={currentColor} onChange={handleColorChange} />

      <div className={styles.toolsWrapper}>
        <EyeDropperButton onPickColor={handleEyeDropper} />
        <CustomColorSwatch color={currentColor} />
      </div>
    </div>
  );
});

GeneralColorPicker.displayName = 'GeneralColorPicker';

export default GeneralColorPicker;
