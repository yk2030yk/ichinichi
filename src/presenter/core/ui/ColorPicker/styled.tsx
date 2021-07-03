import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const ColorPicker = styled.div`
  display: flex;
  ${mergeMixins([
    mixins.width100Per,
    mixins.smallPadding,
    mixins.boxBorderRadius,
  ])}
`;

export const ColorItem = styled.div<{ color: string; selected: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  border: solid 1px ${({ selected, color }) => (selected ? '#fff' : color)};

  ${mergeMixins([
    mixins.pointer,
    mixins.smallMarginLeft,
    mixins.resetFirstItemMargin,
    mixins.boxBorderRadius,
  ])}
`;
