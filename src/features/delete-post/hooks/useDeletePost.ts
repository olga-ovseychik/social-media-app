import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { DELETE_POST_MUTATION } from "@/features/delete-post/api/queries";
import { useAppSelector } from "@/store/hooks";
import { selectedSession } from "@/store/slices/auth.slice";

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const deletePost = useMutation({
    mutationFn: async (id: number) =>
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        DELETE_POST_MUTATION,
        { id },
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`
        }
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({queryKey: ['posts']})
    },
  })

  return {deletePost}
}