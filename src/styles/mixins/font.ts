import { css, Theme } from '@/styles';

export const fontLargeSize = (theme: Theme) => css`
  font-size: 14px;
  font-weight: 600;
`;

export const fontMainSize = (theme: Theme) => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontSmallSize = (theme: Theme) => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontPrimaryMainColor = (theme: Theme) => css`
  color: ${theme.palette.primary?.main};
`;

export const fontMainColor = (theme: Theme) => css`
  color: ${theme.palette.text.main};
`;

export const fontDarkColor = (theme: Theme) => css`
  color: ${theme.palette.text.dark};
`;

export const fontLightColor = (theme: Theme) => css`
  color: ${theme.palette.text.light};
`;

export const fontHoverColor = (theme: Theme) => css`
  transition: color 0.3s;
  &:hover {
    color: ${theme.palette.text.light};
  }
`;

export const fontWrap = () => css`
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const fontWeightBold = (theme: Theme) => css`
  font-weight: 600;
`;

export const pointer = () => css`
  cursor: pointer;
`;

export const cursorEWResize = () => css`
  cursor: pointer;
`;
