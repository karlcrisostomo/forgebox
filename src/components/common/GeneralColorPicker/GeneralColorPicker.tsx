/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useCallback, useMemo, useState } from 'react';
import { Color, parseColor } from 'react-aria-components';
import styles from './styles.module.scss';
import {
  CustomColorArea,
  CustomColorField,
  CustomColorSlider,
  EyeDropperButton,
} from './components';
import { useThemeChange } from '@/hooks';
import { IThemeColors, IThemePalette } from '@/types';
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
      })[colorType as IThemePalette],
    [colorType, primaryColor, secondaryColor, accentColor, textColor]
  );

  const [tempColor, setTempColor] = useState(currentColor);
  const [isDragging, setIsDragging] = useState(false);

  const handleColorChange = useCallback((color: Color | null) => {
    if (!color) return;

    setTempColor(color.toString('hsl'));
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(
    (color: Color | null) => {
      if (!color) return;
      const colorKey = `${colorType}Color` as keyof IThemeColors;
      updateColors({ [colorKey]: color.toString('hsl') });
      setIsDragging(false);
    },
    [updateColors, colorType]
  );

  const handleEyeDropper = useCallback(async () => {
    try {
      if (!window.EyeDropper) return;
      const dropper = new window.EyeDropper();
      const { sRGBHex } = await dropper.open();
      const color = parseColor(sRGBHex).toFormat('hsl');
      setTempColor(color.toString('hsl'));
      handleDragEnd(color);
    } catch (e) {
      console.error('EyeDropper failed:', e);
    }
  }, [handleDragEnd]);

  if (!isOpen) return null;

  return (
    <div className={styles.generalColorPickerWrapper}>
      <CustomColorArea
        value={tempColor}
        onChange={handleColorChange}
        onChangeEnd={handleDragEnd}
      />
      <CustomColorSlider
        value={tempColor}
        channel='hue'
        onChange={handleColorChange}
      />

      <CustomColorField value={tempColor} onChange={handleColorChange} />

      <div className={styles.toolsWrapper}>
        <EyeDropperButton onPickColor={handleEyeDropper} />
        <CustomColorSwatch color={tempColor} />
      </div>
    </div>
  );
});

GeneralColorPicker.displayName = 'GeneralColorPicker';

export default GeneralColorPicker;
