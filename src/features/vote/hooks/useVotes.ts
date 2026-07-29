import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { VOTE_POST_MUTATION, UNVOTE_POST_MUTATION } from "@/entities/vote/api/vote.queries";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";
import { VotesCache } from "@/entities/vote/model/vote.types";


export const useVotes = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const upvote = useMutation({
    mutationFn: async (newVote: { userId: string, postId: number }) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        VOTE_POST_MUTATION,
        newVote,
        {
          Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}` }
      ),
    onMutate: async (newVote) => {
      await queryClient.cancelQueries({ queryKey: ['votes', newVote.postId] })

      const prevVotes = queryClient.getQueryData(['votes', newVote.postId])

      queryClient.setQueryData(['votes', newVote.postId], (oldVotes: VotesCache) => ({
        ...oldVotes,
      items: [...(oldVotes?.items ?? []), { ...newVote, id: Date.now() }]
      }))

      return {prevVotes}
    },
    onError: async (error, newVote, context) => {
      if (context) queryClient.setQueryData(['votes', newVote.postId], context.prevVotes)
    },
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['votes', variables.postId] })
    },
  });

  const unvote = useMutation({
    mutationFn: async (data: { id: number, postId: number }) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        UNVOTE_POST_MUTATION,
        {id: data.id},
        {
          Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}` }
      ),
    onMutate: async (vote) => {
      await queryClient.cancelQueries({ queryKey: ['votes', vote.postId] })

      const prevVotes = queryClient.getQueryData(['votes', vote.postId])

      queryClient.setQueryData(['votes', vote.postId], (oldVotes: VotesCache) => ({
        ...oldVotes,
        items: (oldVotes?.items ?? []).filter(item => item.id !== vote.id),
      }))

      return {prevVotes}
    },
    onError: async (error, vote, context) => {
      if (context) queryClient.setQueryData(['votes', vote.postId], context.prevVotes)
    },
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['votes', variables.postId] })
    },
  });

  return {upvote, unvote}
}