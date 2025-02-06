import { colord } from "colord";

export const parseColors = (hexColor: string | undefined): string => {
  if (hexColor) {
    return colord(hexColor || "#000000").toHslString();
  }
  return colord("#000000").toHslString();
};
