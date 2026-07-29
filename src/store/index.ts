import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeReducer from '@/src/store/slices/theme.slice'
import authReducer from '@/src/store/slices/auth.slice'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function setupStore(preloadedState?: PreloadedState) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: preloadedState as any,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

export const store = setupStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type PreloadedState = Partial<RootState>