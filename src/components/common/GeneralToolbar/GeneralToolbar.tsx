import { memo, useCallback, useState } from "react";

import { IToolBarProps } from "./GeneralToolbar.types";
import { MotionButton } from "../MotionButton";
import { Stack } from "@chakra-ui/react";
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
      <Stack
        display="flex"
        flexDirection="row"
        position="fixed"
        bottom="1"
        padding="0.5em"
        backdropBlur="2xl"
        background="whiteAlpha.400"
        borderRadius="0.5em"
        border="1px solid "
      >
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
      </Stack>
    );
  },
);
GeneralToolbar.displayName = "GeneralToolbar";

export default GeneralToolbar;
