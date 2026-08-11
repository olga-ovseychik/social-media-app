import { FlatList, ActivityIndicator, RefreshControl, View, Text } from 'react-native';
import { useGetComments } from "@/entities/comment/hooks/useGetComments";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import {styles} from './CommentsList.styles'
import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useFocusEffect } from "expo-router";
import CustomBottomSheet, {Action} from "@/shared/components/BottomSheet/CustomBottomSheet";
import { useDeleteComment } from "@/features/comments/delete/hooks/useDeleteComment";
import CommentItem from "@/entities/comment/ui/components/CommentItem/CommentItem";
import { buildCommentsTree } from "@/features/comments/list/lib/buildCommentsTree";

type Props = {
  postId: number;
}

const CommentsList = ({ postId }: Props) => {
  const theme = useAppTheme()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { getComments } = useGetComments(postId)
  const comments = getComments.data?.pages.flatMap(
    (page) => page.items) || [];
  const rootComments = buildCommentsTree(comments);
  const [actions, setActions] = useState<Action[]>([])
  const { deleteComment } = useDeleteComment()

  useEffect(() => {
    if (getComments.hasNextPage && (comments.length <= 5)) {
      void getComments.fetchNextPage();
    }
  }, [comments, getComments.hasNextPage]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        bottomSheetRef.current?.close();
      };
    }, [])
  );

  const handleOpenSetting = (id: number) => {
    setActions([
      {
        label: 'Delete comment',
        icon: 'trash-bin',
        onPress: () => {
          deleteComment.mutate({ commentId: id, postId })
          bottomSheetRef.current?.close();
        }
      }
    ])

    bottomSheetRef.current?.expand()
  }

  if (getComments.isPending) {
    return (
      <ActivityIndicator testID='loading-indicator' size={"large"} color={theme.accent} style={styles(theme).activityIndicator}/>
    )
  }

  if (comments.length === 0) {
    return (
      <Text style={styles(theme).noDataText} testID='no-content-text'>No comments yet. Be the first!</Text>
    )
  }

  return (
    <View style={styles(theme).container}>
      <FlatList
        testID='flat-list'
        data={rootComments}
        renderItem={
          ({ item }) =>
            <CommentItem item={item} onPressSettings={() => handleOpenSetting(item.id)}/>
        }
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            tintColor={theme.accent}
            refreshing={getComments.isRefetching}
            onRefresh={getComments.refetch}
          />
        }
        onEndReachedThreshold={0.4}
        onEndReached={() => getComments.hasNextPage && !getComments.isFetchingNextPage && getComments.fetchNextPage()}
        ListFooterComponent={
          getComments.isFetchingNextPage
            ? <ActivityIndicator size="small" style={{marginBottom: 5}} color={theme.accent}/>
            : null
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
      />
      <CustomBottomSheet
        ref={bottomSheetRef}
        actions={actions}
      />
    </View>
  );
};

export default CommentsList;