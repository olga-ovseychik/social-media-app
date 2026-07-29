import request from 'graphql-request'
import { FETCH_POST_BY_ID_QUERY } from "@/features/post-details/api/querues";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";


export const useGetPostById = (id: number) => {
  const session = useAppSelector(selectedSession)

  return useQuery({
    queryKey: ['posts', id],
    queryFn: async () => {
      const data = await request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        FETCH_POST_BY_ID_QUERY,
        { id },
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        },
      );

      return {item: data?.postsCollection?.edges[0].node}
    },
  })
}

