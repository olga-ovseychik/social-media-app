import { View } from 'react-native';
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import AddPostForm from "@/features/add-post/ui/components/AddPostForm/AddPostForm";
import {styles} from './styles/AddPost.styles'


export default function AddPost() {
  const theme = useAppTheme()

  return (
    <View style={styles(theme).container}>
      <AddPostForm/>
    </View>
  );
}

