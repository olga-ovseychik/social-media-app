import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/store";
import { User } from '@/entities/user/model/user.schema'

export interface AuthState {
  session?: Record<string, any> | null
  profile?: User | null
  isLoading: boolean
  isLoggedIn: boolean,
  isJustLoggedIn: boolean,
}

const initialState: AuthState = {
  session: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
  isJustLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<Record<string, any> | null>) {
      state.session = action.payload;
    },
    setProfile(state, action: PayloadAction<User | null>) {
      state.profile = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsJustLoggedIn(state, action: PayloadAction<boolean>) {
      state.isJustLoggedIn = action.payload;
    },
  },
});

export const { setSession, setProfile, setIsLoading, setIsJustLoggedIn } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) =>
  state.auth.session != null
export const selectedSession = (state: RootState) =>
  state.auth.session
export const selectedIsLoading = (state: RootState) =>
  state.auth.isLoading
export const selectedProfile = (state: RootState) =>
  state.auth.profile
export const selectedJustLoggedIn = (state: RootState) =>
  state.auth.isJustLoggedIn
export default authSlice.reducer;