import { memo, useCallback, useState } from "react";

import styles from "./styles.module.scss";

import { IToolBarProps } from "./GeneralToolbar.types";
import { MotionButton } from "../MotionButton";
const GeneralToolbar = memo<IToolBarProps>(
  ({
    primaryToolbarComponent,
    secondaryToolbarComponent,
    primaryToolbarLabel,
    secondaryToolbarLabel,
  }) => {
    const [isSecondaryToolbarOption, setSecondaryToolbarOption] =
      useState<boolean>(false);

    const handleSwitchToolbarControls = useCallback(() => {
      setSecondaryToolbarOption((prev) => !prev);
    }, []);

    return (
      <div className={styles.toolBarContainer}>
        <div>
          {isSecondaryToolbarOption
            ? secondaryToolbarComponent
            : primaryToolbarComponent}
        </div>

        <MotionButton onClick={handleSwitchToolbarControls}>
          {isSecondaryToolbarOption
            ? primaryToolbarLabel
            : secondaryToolbarLabel}
        </MotionButton>
      </div>
    );
  },
);
GeneralToolbar.displayName = "GeneralToolbar";

export default GeneralToolbar;
