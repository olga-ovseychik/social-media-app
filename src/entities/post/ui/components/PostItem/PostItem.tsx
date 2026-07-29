import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { router, usePathname } from 'expo-router';
import { Image } from 'expo-image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { useAppSelector } from "@/store/hooks";
import { styles } from "./PostItem.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import {PostItemProps} from "@/entities/post/model/types";
import { useGetVotes } from "@/entities/vote/hooks/useGetVotes";
import { useVotes } from "@/features/vote/hooks/useVotes";
import { selectedProfile } from "@/store/slices/auth.slice";
import { useMemo } from "react";


const PostItem = ({item, onPressSettings}: PostItemProps) => {
  const theme = useAppTheme();
  const user = useAppSelector(selectedProfile)
  const votes = useGetVotes(item.id)
  const {upvote, unvote} = useVotes()
  const pathName = usePathname()
  dayjs.extend(relativeTime);

  const isVoted = useMemo(() =>
    votes.data?.items.find(vote => vote.userId === user?.id)
    ,[votes.data, user?.id])

  const handleVote = () => {
    if (isVoted === undefined) {
      upvote.mutate({userId: user?.id!, postId: item.id})
    } else {
      unvote.mutate({id: isVoted.id, postId: item.id})
    }
  }

  const handlePostItemPress = () => {
    if (pathName === `/post/${item.id}`) return;

    router.push({ pathname: "/post/[id]", params: { id: item.id } });
  }

  return (
    <TouchableOpacity style={styles(theme).container} onPress={handlePostItemPress} testID='post-item'>
      <View style={styles(theme).header}>
        <View style={styles(theme).userInfo}>
          <Image style={styles(theme).avatar} source={{ uri: item.user?.avatar_url ?? undefined}}/>
          <Text style={styles(theme).username} testID='post-username'>@{item.user?.username}</Text>
          <Text style={styles(theme).timestamp} testID='post-timestamp'>&#8226; {dayjs(item.created_at).fromNow()}</Text>
        </View>
        <Pressable onPress={onPressSettings} testID='post-settings-button'>
          <Ionicons
            name='ellipsis-vertical'
            color={theme.accent}
            size={16}
          />
        </Pressable>
      </View>

      <View style={styles(theme).tagsContainer}>
        <TouchableOpacity style={styles(theme).tag}>
          <Text style={styles(theme).tagText}>#tag_1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles(theme).tag}>
          <Text style={styles(theme).tagText}>#tag_2786768</Text>
        </TouchableOpacity>
      </View>


      {item.content &&
        (<Text
          style={styles(theme).content}
          testID='post-content'
          >
          {item.content}
        </Text>)
      }

      {!!item.image_url &&
        <Image
          style={styles(theme).image}
          source={{ uri: item.image_url }}
          cachePolicy='memory-disk'
          recyclingKey={item.id.toString()}
          contentFit='cover'
          placeholder={{uri: 'https://placeholder.pics/svg/300'}}
          testID='post-image'
        />
      }

      <View style={styles(theme).controlsContainer}>
        <View style={styles(theme, isVoted !== undefined).buttonWrapper}>
          <TouchableOpacity
            style={styles(theme, isVoted !== undefined).button}
            onPress={handleVote}
            testID='post-vote-button'
          >
            <Text style={styles(theme, isVoted !== undefined).buttonText}>
              <Ionicons name='arrow-up-circle-outline' size={18} />
            </Text>

            <Text style={styles(theme, isVoted !== undefined).count} testID='post-vote-count'>
              {votes.data?.items.length}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles(theme).buttonWrapper}>
          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>
              <Ionicons name='chatbubble-outline' color={theme.accent} size={18} />
            </Text>

            <Text style={styles(theme).count}>7</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;