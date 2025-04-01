import { IGoogleFont, NextPageWithLayout } from "@/types";
import styles from "./styles.module.scss";
import { RootLayout } from "@/layouts/RootLayout";
import { GeneralToolbar, ThemeColorControls } from "@/components";
import { useThemeChange } from "@/hooks";
import { useEffect } from "react";
import { fetchGoogleFonts } from "@/api/googleFonts";
import { useFetchGoogleFonts } from "@/api/hooks/useFetchGoogleFonts";
import { useFontChange } from "@/hooks/useFontChange";
import { SearchBox } from "@/components/common/SearchBox";

const HomePage: NextPageWithLayout = () => {
  const { primary, secondary, text, accent, isDarkMode } = useThemeChange();
  // const [data, setData] = useState<IGoogleFontsResponse | null>(null);
  const { headings, body, updateFonts } = useFontChange();
  console.log("fetchGoogleFonts function:", fetchGoogleFonts); //

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  const { data: fonts } = useFetchGoogleFonts({
    payload: { category: "sans-serif" },
  });

  const handleFontSelect = (font: IGoogleFont, type: "headings" | "body") => {
    updateFonts({ [type]: font.family });
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: primary,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: text }}>Primary</span>
      </div>
      <div
        style={{
          backgroundColor: secondary,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: text }}>secondary</span>
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

      <div>
        <div>
          <SearchBox<IGoogleFont>
            data={fonts}
            placeholder="test"
            filterKey="family"
            onSelect={(font) => handleFontSelect(font, "headings")}
            selectedValue={headings}
          />
          <div style={{ fontFamily: headings, fontWeight: 500 }}>
            Sample Heading Text
          </div>
        </div>

        <div>
          <SearchBox<IGoogleFont>
            data={fonts}
            filterKey="family"
            onSelect={(font) => handleFontSelect(font, "body")}
            selectedValue={body}
            placeholder="test"
          />
          <div style={{ fontFamily: body, fontWeight: 500 }}>
            The quick brown fox jumps over the lazy dog
          </div>
        </div>
      </div>

      <GeneralToolbar
        primaryToolbarComponent={<ThemeColorControls />}
        secondaryToolbarComponent={null}
        primaryToolbarLabel="Colors"
        secondaryToolbarLabel="Fonts"
      />
    </div>
  );
};

HomePage.displayName = "HomePage";

HomePage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default HomePage;
