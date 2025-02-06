import { memo } from 'react';

import { ICustomColorSwatchProps } from './CustomColorSwatch.types';
import { ColorSwatch } from 'react-aria-components';
import classNames from 'classnames';
import styles from  './styles.module.scss';

const CustomColorSwatch = memo<ICustomColorSwatchProps>(({ className, ...props }) => (
 <ColorSwatch  className={classNames(styles.colorSwatch, className)} {...props} />
));

CustomColorSwatch.displayName = 'CustomColorSwatch';

export default CustomColorSwatch;
