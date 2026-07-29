import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.background,
    paddingHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginBottom: 32,
    color: theme.accent
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: theme.highlight,
  },
  link: {
    color: theme.accent,
    marginTop: 8
  },
  warningText: {
    fontSize: 12,
    color: theme.warn,
    marginBottom: 16
  },
})