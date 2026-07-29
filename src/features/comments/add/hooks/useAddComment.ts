import request from 'graphql-request'
import { ADD_COMMENT_MUTATION } from "@/features/comments/add/api/comment.mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";

export const useAddComment = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const addComment =  useMutation({
    mutationFn: async (data: {userId: string, content: string, postId: number, parentId: number | null}) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        ADD_COMMENT_MUTATION,
        data,
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      ),
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({queryKey: [Number(variables.postId), 'comments']})
    },
  });

  return { addComment }
}