import request from 'graphql-request'
import { UPDATE_PROFILE_MUTATION } from "@/entities/user/api/user.queries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { selectedSession } from "@/store/slices/auth.slice";
import { useAppSelector } from "@/store/hooks";


export const useProfiles = () => {
  const queryClient = useQueryClient()
  const session = useAppSelector(selectedSession)

  const updateProfile = useMutation({
    mutationFn: async (
      updated: {
        id: string,
        username: string,
        display_name?: string | null,
        avatar_url?: string | null,
      }) => {
      request(
        `${process.env.EXPO_PUBLIC_SUPABASE_URL}/graphql/v1`,
        UPDATE_PROFILE_MUTATION,
        updated,
        {
          Authorization: `Bearer ${session?.access_token}`,
          apiKey: `${process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        }
      )},
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  });

  return {updateProfile}
}