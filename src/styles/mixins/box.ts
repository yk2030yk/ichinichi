import { css, Props } from '@/styles';

export const box = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.main};
  padding: ${theme.space.small}px;
  border-radius: ${theme.border.radius.main}px;
`;

export const boxHover = ({ theme }: Props) => css`
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.palette.background?.light};
  }
`;

export const boxBorder = ({ theme }: Props) => css`
  border: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderBottom = ({ theme }: Props) => css`
  border-bottom: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderRadius = ({ theme }: Props) => css`
  border-radius: ${theme.border.radius.main}px;
`;

export const boxShadow = ({ theme }: Props) => css`
  box-shadow: ${theme.boxShadow};
`;
