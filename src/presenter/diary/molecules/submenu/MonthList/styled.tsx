import { styled } from '@/styles';

import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => mixins.middlePadding(theme)}
  width: 100%;
`;

export const YearSelect = styled.select`
  ${({ theme }) => [mixins.input(theme)]}
  width: 100%;
`;

export const MonthList = styled.div`
  ${({ theme }) => mixins.middleMarginTop(theme)}
  width: 100%;
`;

export const MonthListItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => [
    mixins.fontDarkColor(theme),
    mixins.fontWeightBold(theme),
    mixins.smallPadding(theme),
    mixins.pointer(),
    selected
      ? mixins.fontPrimaryMainColor(theme)
      : mixins.fontHoverColor(theme),
  ]}
  width: 100%;
  display: flex;
  align-items: center;
`;
