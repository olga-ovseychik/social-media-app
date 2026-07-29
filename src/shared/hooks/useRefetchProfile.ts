import { selectedSession, setIsLoading, setProfile } from "@/store/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { supabase } from "@/shared/api/supabase";


export const useRefetchProfile = () => {
  const dispatch = useAppDispatch();
  const session = useAppSelector(selectedSession)

  return async () => {
    dispatch(setIsLoading(true))

    if (session) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      dispatch(setProfile(data))
    } else {
      dispatch(setProfile(null))
    }
    dispatch(setIsLoading(false))
  }
}