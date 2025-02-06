import { IColorSpace } from '@/types';

export interface IColorFieldSelectorProps {
  value: string;
  options: IColorSpace[];
  onChange: (space: IColorSpace) => void;
}
