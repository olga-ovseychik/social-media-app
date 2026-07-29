import { useColorScheme } from 'react-native';
import { LightTheme, DarkTheme } from "@/constants/theme";
import { useAppSelector } from "@/store/hooks";


export const useAppTheme = () => {
  const {theme} = useAppSelector((state) => state.theme);
  const systemTheme = useColorScheme();

  const resolvedTheme = theme === 'device' ? systemTheme : theme;

  return resolvedTheme === 'dark' ? DarkTheme : LightTheme;
};