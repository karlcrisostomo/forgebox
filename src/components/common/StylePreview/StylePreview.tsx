import { memo } from "react";
import { IStylePreviewProps } from "./StylePreview.types";
import { Box } from "@chakra-ui/react";

const StylePreview = memo<IStylePreviewProps>(
  ({ backgroundColor, textColor, label, fontFamily }) => (
    <Box width="100%" padding={2} borderRadius="md">
      <Box style={{ backgroundColor: backgroundColor }}>
        <span style={{ color: textColor, fontFamily: fontFamily }}>
          {label}
        </span>
      </Box>
    </Box>
  ),
);

StylePreview.displayName = "StylePreview";
export default StylePreview;
