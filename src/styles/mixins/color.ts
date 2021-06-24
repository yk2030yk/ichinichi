import { css, Theme } from '@/styles';

export const backgroundMainCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
`;

export const backgroundDarkCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.dark};
`;
