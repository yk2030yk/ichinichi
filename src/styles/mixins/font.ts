import { css, Props } from '@/styles';

export const fontLargeSize = () => css`
  font-size: 14px;
  font-weight: 600;
`;

export const fontMainSize = () => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontSmallSize = () => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontPrimaryMainColor = ({ theme }: Props) => css`
  color: ${theme.palette.primary?.main};
`;

export const fontMainColor = ({ theme }: Props) => css`
  color: ${theme.palette.text.main};
`;

export const fontDarkColor = ({ theme }: Props) => css`
  color: ${theme.palette.text.dark};
`;

export const fontLightColor = ({ theme }: Props) => css`
  color: ${theme.palette.text.light};
`;

export const fontHoverColor = ({ theme }: Props) => css`
  transition: color 0.3s;
  &:hover {
    color: ${theme.palette.text.light};
  }
`;

export const fontWrap = () => css`
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const fontWeightBold = () => css`
  font-weight: 600;
`;

export const pointer = () => css`
  cursor: pointer;
`;

export const cursorEWResize = () => css`
  cursor: ew-resize;
`;
