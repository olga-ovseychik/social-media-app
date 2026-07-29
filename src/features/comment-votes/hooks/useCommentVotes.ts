import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { UNVOTE_COMMENT_MUTATION } from "@/features/comment-votes/unvote/api/mutations";
import { UPVOTE_COMMENT_MUTATION } from "@/features/comment-votes/upvote/api/mutations";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";
import { VotesCache } from "@/entities/vote/model/vote.types";


export const useCommentVotes = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const upvote = useMutation({
    mutationFn: async (newVote: { userId: string, commentId: number }) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        UPVOTE_COMMENT_MUTATION,
        newVote,
        {
          Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}` }
      ),
    onMutate: async (newVote) => {
      await queryClient.cancelQueries({ queryKey: ['comment_votes', newVote.commentId] })

      const prevVotes = queryClient.getQueryData(['comment_votes', newVote.commentId])

      queryClient.setQueryData(['comment_votes', newVote.commentId], (oldVotes: VotesCache) => ({
        ...oldVotes,
        items: [...(oldVotes?.items ?? []), { ...newVote, id: Date.now() }]
      }))

      return {prevVotes}
    },
    onError: async (error, newVote, context) => {
      if (context) queryClient.setQueryData(['comment_votes', newVote.commentId], context.prevVotes)
    },
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['comment_votes', variables.commentId] })
    },
  });

  const unvote = useMutation({
    mutationFn: async (data: { id: number, commentId: number }) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        UNVOTE_COMMENT_MUTATION,
        { voteId: data.id },
        {
          Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}` }
      ),
    onMutate: async (vote) => {
      await queryClient.cancelQueries({ queryKey: ['comment_votes', vote.commentId] })

      const prevVotes = queryClient.getQueryData(['comment_votes', vote.commentId])

      queryClient.setQueryData(['comment_votes', vote.commentId], (oldVotes: VotesCache) => ({
        ...oldVotes,
        items: (oldVotes?.items ?? []).filter(item => item.id !== vote.id),
      }))

      return {prevVotes}
    },
    onError: async (error, vote, context) => {
      if (context) queryClient.setQueryData(['comment_votes', vote.commentId], context.prevVotes)
    },
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['comment_votes', variables.commentId] })
    },
  });

  return {upvote, unvote}
}