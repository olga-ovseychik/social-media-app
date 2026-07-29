import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { VOTES_BY_COMMENT_QUERY } from "@/entities/comment-votes/api/queries";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";

export const useGetCommentVotes = (commentId: number) => {
  const session = useAppSelector(selectedSession)

  return useQuery({
    queryKey: ['comment_votes', commentId],
    queryFn: async () => {
      const data = await request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        VOTES_BY_COMMENT_QUERY,
        {
          commentId: commentId
        },
        {
          Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      );

      return {
        items: data.comment_votesCollection!.edges.map(
          (edge) => edge.node)
      }
    },
  })
}