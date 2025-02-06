import { memo } from 'react';
import { ColorArea, ColorThumb } from 'react-aria-components';
import styles from './styles.module.scss';
import { ICustomColorAreaProps } from './CustomColoArea.types';

const CustomColorArea = memo<ICustomColorAreaProps>(({ value, onChange,onChangeEnd, }) => (
  <div>
    <ColorArea
      colorSpace='hsb'
      xChannel='saturation'
      yChannel='brightness'
      className={styles.styledColorArea}
      value={value}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
      aria-label="Color selection area" 
    >
      <ColorThumb className={styles.ariaColorThumb} aria-label="Color picker thumb"  />
    </ColorArea>
  </div>
));

CustomColorArea.displayName = 'CustomColorArea';

export default CustomColorArea;
