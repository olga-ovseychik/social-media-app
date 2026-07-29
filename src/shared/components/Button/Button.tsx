import { Pressable, PressableProps, StyleProp } from 'react-native';
import { ReactNode } from "react";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { styles } from './Button.styles'
import { StyleProps } from "react-native-reanimated";

type Props = {
  style?: StyleProp<StyleProps>;
  children?: ReactNode;
} & PressableProps;

export default function Button({ style, children, ...props }: Props) {
  const theme = useAppTheme()

  return (
    <Pressable style={[styles(theme).submitButton, style]} {...props}>
      {children}
    </Pressable>
  );
}