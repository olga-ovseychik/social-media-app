import { FlatList, ActivityIndicator, RefreshControl, View } from 'react-native';
import { usePosts } from "@/entities/post/hooks/usePosts";
import PostItem from "../../../../../entities/post/ui/components/PostItem/PostItem";
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import {styles} from './PostsList.styles'
import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useFocusEffect } from "expo-router";
import CustomBottomSheet, {Action} from "@/shared/components/BottomSheet/CustomBottomSheet";
import { useDeletePost } from "@/features/delete-post/hooks/useDeletePost";


const PostsList = () => {
  const theme = useAppTheme()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { getPosts } = usePosts()
  const posts = getPosts.data?.pages.flatMap(
    (page) => page.items) || [];
  const [actions, setActions] = useState<Action[]>([])
  const { deletePost } = useDeletePost()

  useEffect(() => {
    if (getPosts.hasNextPage && posts.length <= 5) {
      void getPosts.fetchNextPage();
    }
  }, [posts, getPosts.hasNextPage]);

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
        label: 'Delete post',
        icon: 'trash-bin',
        onPress: () => {
          deletePost.mutate(id)
          bottomSheetRef.current?.close();
        }
      }
    ])

    bottomSheetRef.current?.expand()
  }

  if (getPosts.isPending) {
    return (
      <ActivityIndicator testID='loading-indicator' size={"large"} color={theme.accent} style={styles(theme).activityIndicator}/>
    )
  }

  return (
    <View style={styles(theme).container}>
      <FlatList
        data={posts}
        renderItem={
          ({ item }) =>
            <PostItem item={item} onPressSettings={() => handleOpenSetting(item.id)}/>
        }
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            tintColor={theme.accent}
            refreshing={getPosts.isRefetching}
            onRefresh={getPosts.refetch}
          />
        }
        onEndReachedThreshold={0.4}
        onEndReached={() => getPosts.hasNextPage && !getPosts.isFetchingNextPage && getPosts.fetchNextPage()}
        ListFooterComponent={
          getPosts.isFetchingNextPage
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

export default PostsList;