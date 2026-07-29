import { ColorSchemeType } from "@/constants/theme/types";

export const LightTheme: ColorSchemeType = {
  background: '#fff',
  border: '#cfd8dc',
  text: '#000000',
  primary: '#fff',
  spacing: { sm: 8, md: 16, lg: 24 },
  radius: { sm: 6, md: 12 },
  shadow: 'rgba(0,0,0,0.1)',
  tint: '#546e7a',
  highlight: '#eceff1',
  accent: '#455a64',
  warn: '#ff9800',
  error: '#ef5350'
};

export const DarkTheme: ColorSchemeType = {
  background: '#424242',
  border: '#cfd8dc',
  text: '#FFFFFF',
  primary: '#212121',
  spacing: { sm: 8, md: 16, lg: 24 },
  radius: { sm: 6, md: 12 },
  shadow: 'rgba(255,255,255,0.1)',
  tint: '#fafafa',
  highlight: '#cfd8dc',
  accent: '#455a64',
  warn: '#ff9800',
  error: '#ef5350'
};