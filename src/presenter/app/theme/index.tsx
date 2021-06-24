import React from 'react';

import { ThemeProvider, Global } from '@emotion/react';
import { globalStyle } from '@/styles/css/globalStyle';
import {
  useApplicationThemeTypeLoad,
  useApplicationTheme,
} from '@/presenter/global/hooks/theme';

export const ApplicationThemeProvider: React.FC = ({ children }) => {
  const theme = useApplicationTheme();

  useApplicationThemeTypeLoad();

  if (!theme) return null;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <>{children}</>
    </ThemeProvider>
  );
};
