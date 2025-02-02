import React from 'react';
import { memo } from 'react';
import { Button } from 'react-aria-components';
import { IEyeDropperButtonProps } from './EyeDropper.types';
import Image from 'next/image';
import eyeDropperIcon from '@/assets/icons/eye-dropper.svg'


const EyeDropperButton = memo<IEyeDropperButtonProps>(({ onPickColor }) => {
  // const state = React.useContext(ColorPickerStateContext)!;

  // if (!window.EyeDropper) {
  //   return 'EyeDropper is not supported in your Browser.';
  // }

  if (!window.EyeDropper) return null;
  return (
    <div>
      <Button
        aria-label='Eye Dropper'
        // onPress={async () => {
        //   const dropper = new window.EyeDropper();
        //   const result = await dropper.open();
        //   state?.setColor(result.sRGBHex);
        // }}
        onPress={onPickColor}
      >
          <Image src={eyeDropperIcon} width={24} height={24} alt='eye-dropper-icon' />
      </Button>

    </div>
  );
});

EyeDropperButton.displayName = 'EyeDropperButton';

export default EyeDropperButton;
