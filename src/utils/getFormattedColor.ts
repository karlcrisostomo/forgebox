import { IColorSpace } from "@/types";
import { colord } from "colord";
import { Color } from "react-aria-components";

export const getFormattedColor = (
  color: string | Color,
  format: IColorSpace,
) => {
  const c = colord(color as string);
  switch (format) {
    case "hsl":
      return c.toHslString();
    case "rgb":
      return c.toRgbString();
    case "hex":
      return c.toHex();
    default:
      return color;
  }
};
