import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import {VOTES_BY_POST_QUERY} from '@/entities/vote/api/vote.queries'
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";

export const useGetVotes = (postId: number) => {
  const session = useAppSelector(selectedSession)

  return useQuery({
    queryKey: ['votes', postId],
    queryFn: async () => {
      const data = await request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        VOTES_BY_POST_QUERY,
        {
          postId: postId
        },
        {
            Authorization: `Bearer ${session?.access_token}` ,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      );

      return {
        items: data.votesCollection!.edges.map(
          (edge) => edge.node)
      }
    },
  })
}