import { ReactNode } from "react";

export interface IToolBarItems {
  id: string;
  title: string;
  icon: string;
  component?: ReactNode;
  action?: () => void; // for undo/redo actions
}

export const ToolBarItems: IToolBarItems[] = [
  {
    id: "color-picker",
    title: "Color Picker",
    icon: "",
    component: null,
  },
  {
    id: "color-theme",
    title: "Dark/light",
    icon: "",
    component: null,
  },
  {
    id: "undo",
    title: "undo",
    icon: "",
    action: () => {},
  },
  {
    id: "redo",
    title: "undo",
    icon: "",
    action: () => {},
  },
  {
    id: "fonts",
    title: "Fonts",
    icon: "",
    component: null,
  },
];
