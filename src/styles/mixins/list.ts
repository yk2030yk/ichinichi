import { css, Theme } from '@/styles';

export const listItemCss = (theme: Theme) => css`
  margin-top: ${theme.space.small}px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const horizontalListItemCss = (theme: Theme) => css`
  margin-left: ${theme.space.small}px;

  &:first-of-type {
    margin-left: 0;
  }
`;
