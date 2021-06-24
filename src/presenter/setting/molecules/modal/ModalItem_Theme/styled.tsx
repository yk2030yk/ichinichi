import { styled, Theme, css } from '@/styles';
import {
  boxBorderRadiusCss,
  middlePaddingCss,
  pointerCss,
} from '@/styles/mixins';

export const Themes = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const itemCss = (
  theme: Theme,
  selected: boolean,
  backgroundColor: string,
  color: string
) => css`
  ${[middlePaddingCss(theme), boxBorderRadiusCss(theme), pointerCss()]}
  background-color: ${backgroundColor};
  color: ${color};
  border: solid 2px ${selected ? theme.palette.primary?.main : backgroundColor};
`;

export const LightThemeItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => [itemCss(theme, selected, '#fff', '#000')]}
`;

export const DarkThemeItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => [itemCss(theme, selected, '#000', '#fff')]}
`;
