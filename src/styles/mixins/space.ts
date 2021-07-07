import { css, Props } from '@/styles';

export const smallPadding = ({ theme }: Props) => css`
  padding: ${theme.space.small}px;
`;

export const middlePadding = ({ theme }: Props) => css`
  padding: ${theme.space.middle}px;
`;

export const smallMarginLeft = ({ theme }: Props) => css`
  margin-left: ${theme.space.small}px;
`;

export const middleMarginLeft = ({ theme }: Props) => css`
  margin-left: ${theme.space.middle}px;
`;

export const smallMarginTop = ({ theme }: Props) => css`
  margin-top: ${theme.space.small}px;
`;

export const middleMarginTop = ({ theme }: Props) => css`
  margin-top: ${theme.space.middle}px;
`;

export const resetFirstItemMargin = () => css`
  &:first-of-type {
    margin: 0;
  }
`;
