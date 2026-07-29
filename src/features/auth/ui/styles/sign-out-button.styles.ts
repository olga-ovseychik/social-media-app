import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  buttonText: {
    color: theme.accent
  }
});