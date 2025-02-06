import { memo } from 'react';
import {
  ColorSlider,
  ColorThumb,
  SliderOutput,
  SliderTrack,
} from 'react-aria-components';
import styles from './styles.module.scss';
import { ICustomColorSliderProps } from './CustomColorSlider.types';

const CustomColorSlider = memo<ICustomColorSliderProps>(
  ({ onChange, channel, value }) => (
    <ColorSlider
      value={value}
      onChange={onChange}
      className={styles.colorSlider}
      defaultValue='hsl(30, 100%, 50%)'
      channel={channel}
    >
      <SliderOutput className={styles.sliderOutput} />
      <SliderTrack className={styles.sliderTrack}>
        <ColorThumb className={styles.colorThumb} />
      </SliderTrack>
    </ColorSlider>
  )
);

CustomColorSlider.displayName = 'CustomColorSlider';

export default CustomColorSlider;
