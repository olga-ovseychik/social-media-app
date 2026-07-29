import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  submitButton: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.accent,
    height: 40,
    borderRadius: 8,
    color: '#fff'
  },
});