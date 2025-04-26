import { NextPageWithLayout } from "@/types";
import { RootLayout } from "@/layouts/RootLayout";
import { GeneralToolbar, StylePreview } from "@/components";
import { useThemeChange } from "@/hooks";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { FontsControl, ThemeColorControls } from "./components";
import { useFontChange } from "@/hooks/useFontChange";
import { loadGoogleFont } from "@/utils";

const HomePage: NextPageWithLayout = () => {
  const { primary, secondary, text, accent, isDarkMode } = useThemeChange();
  const { headings, body } = useFontChange();
  // const [data, setData] = useState<IGoogleFontsResponse | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  useEffect(() => {
    const fonts = [headings, body].filter(Boolean);
    fonts.forEach(loadGoogleFont);
  }, [headings, body]);

  return (
    <div className="">
      <StylePreview
        backgroundColor={primary}
        textColor={text}
        label="test"
        fontFamily={headings}
      />
      <StylePreview
        fontFamily={body}
        backgroundColor={secondary}
        textColor={text}
        label="secondary"
      />
      <StylePreview backgroundColor={accent} textColor={text} label="accent" />

      <div className={styles.toolbarWrapper}>
        <GeneralToolbar
          primaryToolbarComponent={<ThemeColorControls />}
          secondaryToolbarComponent={<FontsControl />}
          primaryToolbarLabel="Colors"
          secondaryToolbarLabel="Fonts"
        />
      </div>
    </div>
  );
};

HomePage.displayName = "HomePage";

HomePage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default HomePage;
