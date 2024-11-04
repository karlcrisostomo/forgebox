import { NextPageWithLayout } from "@/types";
import styles from "./styles.module.scss";
import React, { useCallback, useEffect } from "react";
import { useThemeChanger } from "@/hooks/useThemeChanger";
import { RootLayout } from "@/layouts/RootLayout";
import { ToolBar } from "@/components/Common/Toolbar";

const HomePage: NextPageWithLayout = () => {
  const { backgroundColor, setBackgroundColor } = useThemeChanger();

  // Prototype for real-time background color change:
  // Note: This is an initial implementation to test functionality
  // and may not represent the final code logic

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor,
    );
  }, [backgroundColor]);

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value;
      setBackgroundColor(newColor);
    },
    [setBackgroundColor],
  );

  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <h1>component</h1>
      </div>

      <button>
        Color Picker
        <input
          type="color"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </button>

      <ToolBar />
    </div>
  );
};

HomePage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default HomePage;
