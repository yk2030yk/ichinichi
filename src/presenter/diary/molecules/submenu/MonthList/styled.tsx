import { styled } from '@/styles';

import {
  inputCss,
  middlePaddingCss,
  smallPaddingCss,
  middleMarginTopCss,
  fontHoverColorCss,
  fontPrimaryMainColorCss,
  fontDarkColorCss,
  fontWeightBoldCss,
  pointerCss,
} from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => middlePaddingCss(theme)}
  width: 100%;
`;

export const YearSelect = styled.select`
  ${({ theme }) => [inputCss(theme)]}
  width: 100%;
`;

export const MonthList = styled.div`
  ${({ theme }) => middleMarginTopCss(theme)}
  width: 100%;
`;

export const MonthListItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => [
    fontDarkColorCss(theme),
    fontWeightBoldCss(theme),
    smallPaddingCss(theme),
    pointerCss(),
    ...(selected
      ? [fontPrimaryMainColorCss(theme)]
      : [fontHoverColorCss(theme)]),
  ]}
  width: 100%;
  display: flex;
  align-items: center;
`;
