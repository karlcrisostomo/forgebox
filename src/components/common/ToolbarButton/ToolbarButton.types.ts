import { ThemeColorType } from '@/types';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface IToolbarButtonProps {
  className?: string;
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
  themePalette?: string;
  index?: number;
  type?: ThemeColorType;
  icons?: string | StaticImport;
  showTitle?: boolean;
}
