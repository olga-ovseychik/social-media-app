import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType, isReached?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  indicatorContainer: {
    flexDirection: 'column',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepIndicator: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    borderColor: theme.accent,
    backgroundColor: theme.accent,
  },
  stepIndex: {
    color: theme.border,
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepText: {
    textAlign: 'center',
    color: theme.accent,
    marginBottom: 46,
  },
  activeStepText: {
    color: 'white',
  },
  line: {
    width: 20,
    height: 2,
    backgroundColor: theme.border,
    marginHorizontal: 10,
  },
  activeLine: {
    backgroundColor: theme.accent,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10
  },
  backButton: {
    backgroundColor: theme.highlight,
    width: '40%',
  },
  backButtonText: {
    color: theme.accent,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: theme.accent,
    width: '40%',
  },
  nextButtonText: {
    color: theme.highlight,
    fontWeight: 'bold',
  },
  warningText: {
    color: theme.warn
  },
  input: {
    backgroundColor: theme.highlight,
    width: 300,
    borderRadius: 8,
    paddingHorizontal: 8
  },
  username: {
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: theme.accent,
  },
  profileImagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.highlight,
    alignSelf: 'center',
  }
});