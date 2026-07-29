import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: '#000',
  },
});