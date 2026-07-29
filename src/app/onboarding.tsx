import { Stack } from 'expo-router'
import StepProgress from "@/features/onboarding/ui/components/step-progress";

export default function OnboardingScreen() {
  return (
    <>
      <Stack.Screen />
      <StepProgress />
    </>
  )
}