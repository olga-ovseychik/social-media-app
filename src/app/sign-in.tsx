import { Stack } from 'expo-router'
import SignInForm from "@/features/auth/ui/components/SignInForm";

export default function SignInScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}/>
      <SignInForm />
    </>
  )
}