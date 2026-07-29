import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from 'react-native-toast-message';
import { RootNavigator } from "@/shared/components/RootNavigator/root-navigator";
import { SplashScreenController } from "@/shared/components/RootNavigator/splash-screen-controller";
import { store, persistor } from '@/store';

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{ flex: 1 }}>
              <SplashScreenController />
              <RootNavigator />
              <Toast />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
