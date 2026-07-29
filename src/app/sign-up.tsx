import { Stack } from 'expo-router'
import SignUpForm from "@/features/auth/ui/components/SignUpForm";

export default function SignUpScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }}/>
      <SignUpForm />
    </>
  )
}