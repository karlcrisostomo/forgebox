import React from "react";
import { memo } from "react";
import { IEyeDropperButtonProps } from "./EyeDropper.types";
import Image from "next/image";
import eyeDropperIcon from "@/assets/icons/eye-dropper.svg";
import { MotionButton } from "@/components/common/MotionButton";

const EyeDropperButton = memo<IEyeDropperButtonProps>(({ onPickColor }) => {
  // const state = React.useContext(ColorPickerStateContext)!;

  // if (!window.EyeDropper) {
  //   return 'EyeDropper is not supported in your Browser.';
  // }

  if (!window.EyeDropper) return null;
  return (
    <div>
      <MotionButton
        aria-label="Eye Dropper"
        // onPress={async () => {
        //   const dropper = new window.EyeDropper();
        //   const result = await dropper.open();
        //   state?.setColor(result.sRGBHex);
        // }}
        onClick={onPickColor}
      >
        <Image
          src={eyeDropperIcon}
          width={24}
          height={24}
          alt="eye-dropper-icon"
        />
      </MotionButton>
    </div>
  );
});

EyeDropperButton.displayName = "EyeDropperButton";

export default EyeDropperButton;
