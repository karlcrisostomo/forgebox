import { NextPageWithLayout } from "@/types";
import { RootLayout } from "@/layouts/RootLayout";
import { GeneralToolbar } from "@/components";
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
      <div
        style={{
          backgroundColor: primary,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: text, fontFamily: headings }}>Primary</span>
      </div>
      <div
        style={{
          backgroundColor: secondary,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: text, fontFamily: body }}>secondary</span>
      </div>
      <div
        style={{
          backgroundColor: accent,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: text }}>accent</span>
      </div>

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
