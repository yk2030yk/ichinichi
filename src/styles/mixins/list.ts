import { css, Props } from '@/styles';

export const listItem = ({ theme }: Props) => css`
  margin-top: ${theme.space.small}px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const horizontalListItem = ({ theme }: Props) => css`
  margin-left: ${theme.space.small}px;

  &:first-of-type {
    margin-left: 0;
  }
`;
