import { css, Theme } from '@/styles';

export const smallPadding = (theme: Theme) => css`
  padding: ${theme.space.small}px;
`;

export const middlePadding = (theme: Theme) => css`
  padding: ${theme.space.middle}px;
`;

export const smallMarginLeft = (theme: Theme) => css`
  margin-left: ${theme.space.small}px;
`;

export const middleMarginLeft = (theme: Theme) => css`
  margin-left: ${theme.space.middle}px;
`;

export const smallMarginTop = (theme: Theme) => css`
  margin-top: ${theme.space.small}px;
`;

export const middleMarginTop = (theme: Theme) => css`
  margin-top: ${theme.space.middle}px;
`;

export const resetFirstItemMargin = () => css`
  &:first-of-type {
    margin: 0;
  }
`;
