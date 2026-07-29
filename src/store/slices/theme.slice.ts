import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'device';

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: 'device',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;