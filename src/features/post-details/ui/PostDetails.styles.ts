import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.background,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  commentsSection: {
    flex: 1,
    flexDirection: "column",
    gap: 6
  },
  loadingOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});