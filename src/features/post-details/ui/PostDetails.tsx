import { useAppTheme } from "@/shared/hooks/useAppTheme";
import PostItem from "../../../entities/post/ui/components/PostItem/PostItem";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import {styles} from './PostDetails.styles'
import { useGetPostById } from "@/features/post-details/hooks/useGetPostById";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import CustomBottomSheet from "@/shared/components/BottomSheet/CustomBottomSheet";
import { useDeletePost } from "@/features/delete-post/hooks/useDeletePost";
import { Redirect } from "expo-router";
import { BlurView } from 'expo-blur';
import CommentsList from '@/features/comments/list/ui/components/CommentsList'
import AddCommentForm from "../../comments/add/ui/components/AddCommentForm/AddCommentForm";


export default function PostDetails({id}: Readonly<{ id: number }>) {
  const theme = useAppTheme();
  const { data } = useGetPostById(id)
  const {deletePost} = useDeletePost()
  const bottomSheetRef = useRef<BottomSheet>(null);

  const item = data?.item

  const handleOpenSetting = () => {
    bottomSheetRef.current?.expand()
  }

  const handleDeletePost = () => {
    deletePost.mutate(id)
  }

  if (deletePost.isSuccess) return <Redirect href='/(tabs)/feed'/>

  return (
    <View style={styles(theme).container}>
      {item && <PostItem item={item} onPressSettings={handleOpenSetting} />}
      <AddCommentForm postId={id} />
      <View style={styles(theme).commentsSection} testID='comments-section'>
        <CommentsList postId={id}/>
      </View>
      <CustomBottomSheet
        ref={bottomSheetRef}
        actions={
          [{
            label: 'Delete post',
            icon: 'trash-bin',
            onPress: handleDeletePost
          }]
        }
      />

      {deletePost.isPending && (
          <BlurView intensity={50} style={StyleSheet.absoluteFill} >
          <View style={styles(theme).loadingOverlay}>
            <ActivityIndicator size="large" color={theme.accent} />
          </View>
        </BlurView>
      )}
    </View>
  )
}