import { css, Theme } from '@/styles';

export const box = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
  padding: ${theme.space.small}px;
  border-radius: ${theme.border.radius.main}px;
`;

export const boxHover = (theme: Theme) => css`
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.palette.background?.light};
  }
`;

export const boxBorder = (theme: Theme) => css`
  border: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderBottom = (theme: Theme) => css`
  border-bottom: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderRadius = (theme: Theme) => css`
  border-radius: ${theme.border.radius.main}px;
`;

export const boxShadow = (theme: Theme) => css`
  box-shadow: ${theme.boxShadow};
`;
