import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const ColorPicker = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) => [mixins.smallPadding(theme), mixins.boxBorderRadius(theme)]}
`;

export const ColorItem = styled.div<{ color: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border: solid 1px ${({ selected, color }) => (selected ? '#fff' : color)};
  ${({ theme }) => [
    mixins.pointer(),
    mixins.smallMarginLeft(theme),
    mixins.resetFirstItemMargin(),
    mixins.boxBorderRadius(theme),
  ]}
`;
