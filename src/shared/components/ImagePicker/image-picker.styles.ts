import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles  = (theme: ColorSchemeType, isReached?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: theme.highlight,
  },
  buttonText: {
    color: theme.accent,
    paddingHorizontal: 16,
  }
});