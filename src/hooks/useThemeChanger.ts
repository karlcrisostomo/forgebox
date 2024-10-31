import { setBackgroundColor } from "@/store/themeChangerReducer";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export const useThemeChanger = () => {
  const dispatch = useAppDispatch();
  const backgroundColor = useAppSelector(
    (state) => state.theme.backgroundColor,
  );

  return {
    backgroundColor,
    setBackgroundColor: (color: string) => dispatch(setBackgroundColor(color)),
  };
};
