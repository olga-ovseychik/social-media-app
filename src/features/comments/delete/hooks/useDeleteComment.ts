import request from 'graphql-request'
import { DELETE_COMMENT_MUTATION } from "../api/comments.mutations";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const deleteComment =  useMutation({
    mutationFn: async (data: {commentId: number, deleted_at?: string}) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        DELETE_COMMENT_MUTATION,
        {...data, deleted_at: new Date().toISOString()},
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      ),
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({queryKey: [variables.commentId, 'comments']})
    },
  });

  return { deleteComment }
}