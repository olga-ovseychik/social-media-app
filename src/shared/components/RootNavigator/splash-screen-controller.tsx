import { SplashScreen } from 'expo-router'
import { useAppSelector } from "@/store/hooks";
import { selectedIsLoading } from "@/store/slices/auth.slice";
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export function SplashScreenController() {
  const isLoading = useAppSelector(selectedIsLoading);

  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  useEffect(()  => {
    if ((loaded || error) && !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, isLoading]);

  return null
}