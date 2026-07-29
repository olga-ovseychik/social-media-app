import request from 'graphql-request'
import { ADD_POST_MUTATION, FEED_QUERY } from "@/entities/post/api/post.queries";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";


export const usePosts = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)


  const addPost =  useMutation({
    mutationFn: async (data: {userId: string, content: string, image_url: string | null}) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        ADD_POST_MUTATION,
        data,
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      ),
      onSuccess: () => {
        void queryClient.invalidateQueries({queryKey: ['posts']})
      },
  });

  const getPosts =  useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam }: {pageParam: string | undefined}) => {
      const data = await request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        FEED_QUERY,
        {
          first: 10,
          after: pageParam
        },
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        },
      );

      return {
        items: data.postsCollection!.edges.map((edge) => edge.node),
        endCursor: data.postsCollection!.pageInfo.endCursor,
        hasNextPage: data.postsCollection!.pageInfo.hasNextPage,
      }
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage
        ? lastPage.endCursor
        : undefined
    }
  })

  return {addPost, getPosts};
}

