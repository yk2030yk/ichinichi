import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const Popup = styled.div<{
  width?: number;
  minHeight?: number;
  maxHeight?: number;
}>`
  overflow-y: scroll;
  position: absolute;
  ${mergeMixins([
    mixins.boxShadow,
    mixins.boxBorderRadius,
    mixins.backgroundColorMain,
    mixins.smallMarginTop,
  ])}
  ${({ width = 300, minHeight = 50, maxHeight = 150 }) => [
    mixins.width(width),
    mixins.minHeight(minHeight),
    mixins.maxHeight(maxHeight),
  ]}
`;

export const PopupBackground = styled.div`
  ${mergeMixins([mixins.width100Per, mixins.height100Per])}
  top: 0;
  left: 0;
  position: fixed;
`;
