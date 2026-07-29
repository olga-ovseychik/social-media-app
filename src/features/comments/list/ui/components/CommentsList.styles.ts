import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    paddingHorizontal: 16
  },
  activityIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataText: {
    textAlign: "center",
  }
});