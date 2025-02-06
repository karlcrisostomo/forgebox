import { ThemeColorType } from '@/types';

export interface IColorPickerProps {
  colorType: ThemeColorType;
  isOpen?: boolean;
  onClose?: () => void;
}
