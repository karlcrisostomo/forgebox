import { memo, useCallback, useEffect, useState } from 'react';
import { ColorField, Input } from 'react-aria-components';
import { ICustomColorFieldProps } from './CustomColorField.types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ColorFieldSelector } from '../ColorFieldSelector';
import { IColorSpace } from '@/types';
import { getFormattedColor } from '@/utils';
import {
  getStoredValue,
  setStoredValue,
  STORAGE_KEYS,
} from '@/hooks/useSessionStorage';
import { COLOR_SPACES } from '@/constants/ColorSpaces';


const CustomColorField = memo<ICustomColorFieldProps>(
  ({ className, value, onChange }) => {
    const [activeColorSpace, setActiveColorSpace] = useState<IColorSpace>(() =>
      getStoredValue(STORAGE_KEYS.COLOR_SPACE, 'hsl')
    );
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
      const formattedColor = getFormattedColor(
        value as string,
        activeColorSpace
      );
      setDisplayValue(formattedColor as string);
    }, [value, activeColorSpace]);

    const handleColorSpaceChange = useCallback((space: IColorSpace) => {
      setActiveColorSpace(space);
      setStoredValue(STORAGE_KEYS.COLOR_SPACE, space);
    }, []);

    return (
      <div>
        <ColorFieldSelector
          options={COLOR_SPACES}
          value={activeColorSpace}
          onChange={handleColorSpaceChange}
        />

        <ColorField
          className={classNames(styles.colorFieldContainer, className)}
          value={value}
          onChange={onChange}
        >
          <Input
            value={displayValue as string}
            className={styles.styledInput}
          />
        </ColorField>
      </div>
    );
  }
);

CustomColorField.displayName = 'CustomColorField';

export default CustomColorField;
