import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    marginBottom: 16
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 16,
    gap: 6
  },
  input: {
    width: "auto",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.border,
    padding: 8
  },
  button: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: theme.highlight
  },
  sendButton: {
    width: "20%",
    alignSelf: 'flex-end'
  },
  warningText: {
    fontSize: 12,
    color: theme.warn,
  },
  buttonText: {
    color: theme.accent,
    fontFamily: 'Inter_500Bold'
  },
  replyControlsWrapper: {
    flexDirection: 'row',
    gap: 6,
    alignSelf: 'flex-end'
  },
  replyToWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6
  }
});