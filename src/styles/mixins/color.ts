import { css, Theme } from '@/styles';

export const backgroundColorMain = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
`;

export const backgroundColorDark = (theme: Theme) => css`
  background-color: ${theme.palette.background?.dark};
`;

export const backgroundColorLight = (theme: Theme) => css`
  background-color: ${theme.palette.background?.light};
`;
