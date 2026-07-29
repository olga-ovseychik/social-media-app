import request from 'graphql-request'
import { FETCH_COMMENTS_BY_POST_QUERY } from "@/entities/comment/api/comment.queries";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";


export const useGetComments = (postId: number) => {
  const session = useAppSelector(selectedSession)

  const getComments =  useInfiniteQuery({
    queryKey: [postId, 'comments'],
    queryFn: async ({ pageParam }: {pageParam: string | undefined}) => {
      const data = await request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        FETCH_COMMENTS_BY_POST_QUERY,
        {
          first: 10,
          after: pageParam,
          postId
        },
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        },
      );

      return {
        items: data.commentsCollection!.edges.map((edge) => edge.node),
        endCursor: data.commentsCollection!.pageInfo.endCursor,
        hasNextPage: data.commentsCollection!.pageInfo.hasNextPage,
      }
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage
        ? lastPage.endCursor
        : undefined
    }
  })

  return { getComments };
}

