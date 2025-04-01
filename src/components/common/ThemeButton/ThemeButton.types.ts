// export interface IMenuItem {
//   id: string;
//   label: string;
//   icon?: string | StaticImport;
//   action: () => void;
//   disabled?: boolean;
//   divider?: boolean;
// }

// export interface IMenuRenderProps {
//   items: IMenuItem;
//   className?:string;
// }

export interface IThemeButtonProps {
  className?: string;
  title?: string;
  themePalette?: string;
  index?: number;
  showTitle?: boolean;
}
