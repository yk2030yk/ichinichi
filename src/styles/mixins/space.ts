import { css, Theme } from '@/styles';

export const smallPaddingCss = (theme: Theme) => css`
  padding: ${theme.space.small}px;
`;

export const middlePaddingCss = (theme: Theme) => css`
  padding: ${theme.space.middle}px;
`;

export const smallMarginLeftCss = (theme: Theme) => css`
  margin-left: ${theme.space.small}px;
`;

export const middleMarginLeftCss = (theme: Theme) => css`
  margin-left: ${theme.space.middle}px;
`;

export const smallMarginTopCss = (theme: Theme) => css`
  margin-top: ${theme.space.small}px;
`;

export const middleMarginTopCss = (theme: Theme) => css`
  margin-top: ${theme.space.middle}px;
`;

export const resetFirstItemMarginCss = () => css`
  &:first-of-type {
    margin: 0;
  }
`;
