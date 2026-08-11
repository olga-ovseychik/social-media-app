import { ColorSchemeType } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = (theme: ColorSchemeType, isVoted?: boolean) => StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: theme.border,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    gap: 6
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 15,
  },
  username: {
    fontSize: 13,
    fontFamily: 'Inter_500Medium'
  },
  timestamp: {
    color: theme.accent,
    fontSize: 12,
  },
  content: {
    marginBottom: 16,
    fontSize: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 16
  },
  tag: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.highlight,
  },
  tagText: {
    color: theme.accent,
    fontSize: 12,
  },
  image: {
    height: 500,
    width: '100%',
    overflow: "hidden",
    borderRadius: 16,
    marginBottom: 16,
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  buttonWrapper: {
    borderRadius: 25,
    backgroundColor: isVoted ? theme.error : theme.highlight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  buttonText: {
    color: isVoted ? 'white' : theme.accent,
  },
  count: {
    fontSize: 12,
    color: isVoted ? 'white' : theme.accent,
  },
  replyButton: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 6
  },
  replyButtonText: {
    color: theme.accent,
  },
  deletedComment: {
    color: theme.accent,
  }
});