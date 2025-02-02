import { memo } from 'react';
import { ColorArea, ColorThumb } from 'react-aria-components';
import styles from './styles.module.scss';
import { ICustomColorAreaProps } from './CustomColoArea.types';

const CustomColorArea = memo<ICustomColorAreaProps>(({ value, onChange }) => (
  <div>
    <ColorArea
      colorSpace='hsb'
      xChannel='saturation'
      yChannel='brightness'
      className={styles.styledColorArea}
      value={value}
      onChange={onChange}
      aria-label="Color selection area" 
    >
      <ColorThumb className={styles.ariaColorThumb} aria-label="Color picker thumb"  />
    </ColorArea>
  </div>
));

CustomColorArea.displayName = 'CustomColorArea';

export default CustomColorArea;
