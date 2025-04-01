import { memo } from "react";
import { IFontsOptionSettingsProps } from "./FontsOptionSetting.types";

const FontsOptionSettings = memo<IFontsOptionSettingsProps>(() => (
  <>fonts settings</>
));

FontsOptionSettings.displayName = "FontsOptionSettings";

export default FontsOptionSettings;
