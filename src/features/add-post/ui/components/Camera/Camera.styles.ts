import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    height: '100%',
    borderRadius: 5,
  },
  buttonCaptureContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  buttonToggleContainer: {
    position: 'absolute',
    bottom: 14,
    right: 14,
  },
  buttonCloseContainer: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});