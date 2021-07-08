import { styled } from '@/styles';

import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middlePadding({ theme })]}
`;

export const YearSelect = styled.select`
  ${({ theme }) => [mixins.width100Per(), mixins.input({ theme })]}
`;

export const MonthList = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middleMarginTop({ theme })]}
`;

export const MonthListItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => [
    mixins.fontDarkColor({ theme }),
    mixins.fontWeightBold(),
    mixins.smallPadding({ theme }),
    mixins.pointer(),
    mixins.width100Per(),
    selected
      ? mixins.fontLightColor({ theme })
      : mixins.fontHoverColor({ theme }),
  ]}
  display: flex;
  align-items: center;
`;
