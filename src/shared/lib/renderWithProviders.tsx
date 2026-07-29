import React, { PropsWithChildren } from 'react'
import { render, userEvent } from '@testing-library/react-native'
import type { RenderOptions } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import type { AppStore, PreloadedState } from '@/src/store'
import { setupStore } from '@/src/store'

interface ExtendedRenderOptions
  extends Omit<RenderOptions, 'queries' | 'wrapper'> {
  preloadedState?: PreloadedState,
  store?: AppStore,
}

export const createWrapper = (preloadedState?: PreloadedState) => {
  const store = setupStore(preloadedState)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {retry: false},
      mutations: {retry: false},
    }
  })

  return {
    wrapper: ({ children }: PropsWithChildren) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    ),
    queryClient,
  }
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState,
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions

  const { wrapper } = createWrapper(preloadedState)

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper, ...renderOptions })
  }
}