import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType, isReached?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.background,
    borderRadius: 8,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 0.5,
    marginBottom: 16,
    height: 115,
  },
  countText: {
    fontSize: 10,
    alignSelf: 'flex-end',
    color: isReached ? theme.warn : theme.accent,
    marginBottom: 16,
  },
  warningText: {
    fontSize: 12,
    color: theme.warn,
    marginBottom: 16
  },
  controls: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 16,
    justifyContent: 'center',
  },
  addPhotoButton: {
    backgroundColor: theme.highlight,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "auto",
  },
  addPhotoBtnText: {
    color: theme.accent,
  },
  submitButton: {
    width: "30%",
    alignSelf: "flex-end",
  },
  imagePreview: {
    height: 500,
    borderRadius: 8,
  },
  retakeButton: {
    marginBottom: 16,
    backgroundColor: theme.highlight,
  },
  retakeButtonText: {
    color: theme.accent,
    fontFamily: 'Inter_700Bold',
  }
});