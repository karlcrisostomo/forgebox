import { useFetchGoogleFonts } from "@/api/hooks";
import { useFontChange } from "@/hooks/useFontChange";
import type { IGoogleFont } from "@/types";
import { memo, useCallback } from "react";
import { FaUndo, FaRedo } from "react-icons/fa";
import { FaDiceFive } from "react-icons/fa6";
import { Box } from "@chakra-ui/react";
import { loadGoogleFont } from "@/utils";
import styles from "./styles.module.scss";
import { GeneralPopover } from "@/components/common/GeneralPopover";
import { MotionButton } from "@/components";
import { SearchBox } from "@/components/common/SearchBox";
type FontType = "headings" | "body";

const FontsControl = memo(() => {
  const { headings, body, updateFonts, randomizeFonts, undoFont, redoFont } =
    useFontChange();
  const { data: fonts } = useFetchGoogleFonts({
    payload: { category: "sans-serif" },
  });

  const handleFontSelect = useCallback(
    (font: IGoogleFont, type: FontType) => {
      if (font?.family) {
        loadGoogleFont(font?.family);
        updateFonts({ [type]: font?.family });
      }
    },
    [updateFonts],
  );

  const handleRandomize = useCallback(() => {
    if (fonts && fonts.length > 0) {
      randomizeFonts(fonts);
    }
  }, [fonts, randomizeFonts]);

  return (
    <Box display="flex" gap="4">
      {/* Headings Font Button */}
      <GeneralPopover
        padding="0"
        height="400px"
        justifyContent="start"
        trigger={
          <MotionButton>
            <div>
              <span>Headings</span>
              <span style={{ fontFamily: headings || "system-ui" }}></span>
            </div>
          </MotionButton>
        }
      >
        <Box display="flex" flexDirection="column" justifyContent="start">
          <SearchBox<IGoogleFont>
            data={fonts}
            filterKey="family"
            className={styles.searchBox}
            onSelect={(font) => handleFontSelect(font, "headings")}
            selectedValue={headings}
            placeholder="Search heading fonts..."
          />
        </Box>
      </GeneralPopover>

      {/* Body Font Button */}
      <GeneralPopover
        padding="0"
        height="400px"
        justifyContent="start"
        trigger={
          <MotionButton>
            <div>
              <span>Body</span>
              <span style={{ fontFamily: body || "system-ui" }}></span>
            </div>
          </MotionButton>
        }
      >
        <Box display="flex" flexDirection="column" justifyContent="start">
          <SearchBox<IGoogleFont>
            data={fonts}
            filterKey="family"
            className={styles.searchBox}
            onSelect={(font) => handleFontSelect(font, "body")}
            selectedValue={body}
            placeholder="Search body fonts..."
          />
        </Box>
      </GeneralPopover>

      {/* Type Scale Button */}
      <MotionButton>Type Scale</MotionButton>

      {/* Undo Font button */}
      <MotionButton className={styles.motionButton} onClick={undoFont}>
        <FaUndo size={18} />
      </MotionButton>
      {/* Redo Font button */}
      <MotionButton className={styles.motionButton} onClick={redoFont}>
        <FaRedo size={18} />
      </MotionButton>
      {/* Randomize Font button */}
      <MotionButton className={styles.motionButton} onClick={handleRandomize}>
        <FaDiceFive size={18} />
      </MotionButton>
    </Box>
  );
});

FontsControl.displayName = "FontsControl";

export default FontsControl;
