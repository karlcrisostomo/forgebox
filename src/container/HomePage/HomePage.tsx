import { NextPageWithLayout } from "@/types";
import styles from "./styles.module.scss";
import { RootLayout } from "@/layouts/RootLayout";
import { GeneralToolbar } from "@/components";
import { useThemeChange } from "@/hooks";
import { useEffect } from "react";
import { fetchGoogleFonts } from "@/api/googleFonts";

const HomePage: NextPageWithLayout = () => {
  const { primaryColor, secondaryColor, textColor, accentColor, isDarkMode } =
    useThemeChange();
  // const [data, setData] = useState<IGoogleFontsResponse | null>(null);

  console.log("fetchGoogleFonts function:", fetchGoogleFonts); //

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  // useEffect(() => {
  //   const getFonts = async () => {
  //     try {
  //       const res = await fetchGoogleFonts();
  //       setData(res);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getFonts();
  // }, []);

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: primaryColor,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: textColor }}>Primary</span>
      </div>
      <div
        style={{
          backgroundColor: secondaryColor,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: textColor }}>secondary</span>
      </div>
      <div
        style={{
          backgroundColor: accentColor,
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <span style={{ color: textColor }}>accent</span>
      </div>

      <div>
        <h1>google fonts</h1>
      </div>
      <GeneralToolbar />
    </div>
  );
};

HomePage.displayName = "HomePage";

HomePage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default HomePage;
