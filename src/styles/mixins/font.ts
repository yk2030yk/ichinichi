import { css, Theme } from '@/styles';

export const fontLargeSizeCss = (theme: Theme) => css`
  font-size: 14px;
  font-weight: 600;
`;

export const fontMainSizeCss = (theme: Theme) => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontSmallSizeCss = (theme: Theme) => css`
  font-size: 12px;
  font-weight: 300;
`;

export const fontPrimaryMainColorCss = (theme: Theme) => css`
  color: ${theme.palette.primary?.main};
`;

export const fontMainColorCss = (theme: Theme) => css`
  color: ${theme.palette.text.main};
`;

export const fontDarkColorCss = (theme: Theme) => css`
  color: ${theme.palette.text.dark};
`;

export const fontLightColorCss = (theme: Theme) => css`
  color: ${theme.palette.text.light};
`;

export const fontHoverColorCss = (theme: Theme) => css`
  transition: color 0.3s;
  &:hover {
    color: ${theme.palette.text.light};
  }
`;

export const fontWrapCss = () => css`
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const fontWeightBoldCss = (theme: Theme) => css`
  font-weight: 600;
`;

export const pointerCss = () => css`
  cursor: pointer;
`;
