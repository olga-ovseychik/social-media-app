import { Stack } from "expo-router";
import {
  setSession,
  setIsLoading,
  setIsJustLoggedIn,
  selectedSession,
  selectIsLoggedIn,
  selectedIsLoading,
  selectedProfile,
} from "@/store/slices/auth.slice";
import { useEffect } from "react";
import { supabase } from "@/shared/api/supabase";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRefetchProfile } from "@/shared/hooks/useRefetchProfile";

export function RootNavigator() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const profile = useAppSelector(selectedProfile)
  const session = useAppSelector(selectedSession)
  const isLoading = useAppSelector(selectedIsLoading)
  const refetchProfile = useRefetchProfile()
  const isOnboarded = !!profile?.username;

  useEffect(() => {
    const fetchSession = async () => {
      dispatch(setIsLoading(true))
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Error fetching session:', error)
      }

      dispatch(setSession(data?.session ?? null))
    }

    void fetchSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, _session) => {
      dispatch(setSession(_session ?? null))

      if (_event === 'SIGNED_IN') {
        dispatch(setIsJustLoggedIn(true))
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    void refetchProfile()
  }, [session]);


  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn && !isOnboarded}>
        <Stack.Screen name="onboarding" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn && isOnboarded}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="post/[id]" options={{ headerShown: true, headerBackVisible: true, title: 'Back' }} />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="sign-up" />
      </Stack.Protected>

      <Stack.Screen name="+not-found" />
    </Stack>
  );
}