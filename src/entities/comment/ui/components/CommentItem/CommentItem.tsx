import { View, Text, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { Image } from 'expo-image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { useAppSelector } from "@/store/hooks";
import { styles } from "./CommentItem.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CommentItemProps } from "@/entities/comment/model/types";
import { useCommentVotes } from "@/features/comment-votes/hooks/useCommentVotes";
import { useGetCommentVotes } from "@/entities/comment-votes/hooks/useGetCommentVotes";
import { selectedProfile } from "@/store/slices/auth.slice";
import { useMemo, useState } from "react";
import AddCommentForm from "@/features/comments/add/ui/components/AddCommentForm/AddCommentForm";


const CommentItem = ({item, onPressSettings}: CommentItemProps) => {
  const theme = useAppTheme();
  const user = useAppSelector(selectedProfile)
  const votes = useGetCommentVotes(item.id)
  const {upvote, unvote} = useCommentVotes()
  const [showReplyForm, setShowReplyForm] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState<boolean>(false)
  dayjs.extend(relativeTime);

  const isVoted = useMemo(() =>
      votes.data?.items.find(vote => vote.userId === user?.id)
    ,[votes.data, user?.id])

  const handleVote = () => {
    if (isVoted === undefined) {
      upvote.mutate({userId: user?.id!, commentId: item.id})
    } else {
      unvote.mutate({id: isVoted.id, commentId: item.id})
    }
  }

  return (
    <TouchableOpacity style={styles(theme).container} testID='comment-item'>
      <View style={styles(theme).header}>
        <View style={styles(theme).userInfo}>
          <Image style={styles(theme).avatar} source={{ uri: item.user?.avatar_url ?? undefined}} testID={'comment-user-avatar'}/>
          <Text style={styles(theme).username} testID='comment-username'>@{item.user?.username}</Text>
          <Text style={styles(theme).timestamp} testID='comment-timestamp'>&#8226; {dayjs(item.created_at).fromNow()}</Text>
        </View>
        <Pressable onPress={onPressSettings} testID='comment-settings-button'>
          <Ionicons
            name='ellipsis-vertical'
            color={theme.accent}
            size={16}
          />
        </Pressable>
      </View>

      {item.content &&
        (<Text
          style={styles(theme).content}
          testID='comment-content'
        >
          {item.content}
        </Text>)
      }

      <View style={styles(theme).controlsContainer}>
        <Pressable
          style={styles(theme, isVoted !== undefined).buttonWrapper}
          onPress={handleVote}
          testID='comment-vote-button'
        >
          <View
            style={styles(theme, isVoted !== undefined).button}
          >
            <Text style={styles(theme, isVoted !== undefined).buttonText}>
              <Ionicons name='arrow-up-circle-outline' size={18} />
            </Text>

            <Text style={styles(theme, isVoted !== undefined).count} testID='comment-vote-count'>
              {votes.data?.items.length}
            </Text>
          </View>
        </Pressable>

        <View style={styles(theme).buttonWrapper}>
          <TouchableOpacity
            style={styles(theme).button}
            onPress={() => setShowReplies(prev => !prev)}
            testID='comment-replies-button'
          >
            <Text style={styles(theme).buttonText}>
              <Ionicons name='chatbubble-outline' color={theme.accent} size={18} />
            </Text>

            <Text style={styles(theme).count}>{item.children?.length}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles(theme).replyButton}
          onPress={() => setShowReplyForm(prev => !prev)}
          testID='comment-reply-button'
        >
          <Ionicons
            name='return-up-back-outline'
            color={theme.accent}
            size={16}
          />
          <Text style={styles(theme).replyButtonText}>Reply</Text>
        </TouchableOpacity>
      </View>
      {showReplyForm && (
        <AddCommentForm
          postId={item.postId}
          parentId={item.id}
          showForm={showReplyForm}
          setShowForm={setShowReplyForm}
          userToReply={item.user?.username}
        />
      )}

      {showReplies && (
        <View testID={'comment-replies'}>
          {item?.children?.map(reply => (
            <CommentItem item={reply} key={reply.id} onPressSettings={() => {}}/>
          ))}
        </View>
      )}

    </TouchableOpacity>
  );
};

export default CommentItem;