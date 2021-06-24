import { css, Theme } from '@/styles';

export const boxCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
  padding: ${theme.space.small}px;
  border-radius: ${theme.border.radius.main}px;
`;

export const boxHoverCss = (theme: Theme) => css`
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.palette.background?.light};
  }
`;

export const boxBorderCss = (theme: Theme) => css`
  border: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderBottomCss = (theme: Theme) => css`
  border-bottom: solid 1px ${theme.palette.background?.light};
`;

export const boxBorderRadiusCss = (theme: Theme) => css`
  border-radius: ${theme.border.radius.main}px;
`;

export const boxShadowCss = (theme: Theme) => css`
  box-shadow: ${theme.boxShadow};
`;
