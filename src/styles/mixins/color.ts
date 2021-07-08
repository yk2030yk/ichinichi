import { css, Props } from '@/styles';

export const backgroundColorMain = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.main};
`;

export const backgroundColorSub = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.sub};
`;

export const backgroundColorDark = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.dark};
`;

export const backgroundColorLight = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.light};
`;

export const backgroundColorTransparent = ({ theme }: Props) => css`
  background-color: ${theme.palette.background?.transparent};
`;
