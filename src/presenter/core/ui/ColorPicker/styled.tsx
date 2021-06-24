import { styled } from '@/styles';
import {
  backgroundDarkCss,
  boxBorderRadiusCss,
  pointerCss,
  resetFirstItemMarginCss,
  smallMarginLeftCss,
  smallPaddingCss,
} from '@/styles/mixins';

export const ColorPicker = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) => [
    smallPaddingCss(theme),
    backgroundDarkCss(theme),
    boxBorderRadiusCss(theme),
  ]}
`;

export const ColorItem = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  ${({ theme }) => [
    pointerCss(),
    smallMarginLeftCss(theme),
    resetFirstItemMarginCss(),
    boxBorderRadiusCss(theme),
  ]}
`;
