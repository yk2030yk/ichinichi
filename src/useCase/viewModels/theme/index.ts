export const THEME_TYPE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

export type ThemeType = typeof THEME_TYPE[keyof typeof THEME_TYPE];
