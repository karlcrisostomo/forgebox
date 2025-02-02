export interface IToolbarButtonProps {
  className?: string;
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
  isActive?: boolean;
  themePalette?: string;
  index?: number;
}
