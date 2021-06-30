import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Popup = styled.div<{
  width?: number;
  minHeight?: number;
  maxHeight?: number;
}>`
  width: ${({ width = 300 }) => width}px;
  min-height: ${({ minHeight = 50 }) => minHeight}px;
  max-height: ${({ maxHeight = 150 }) => maxHeight}px;
  overflow-y: scroll;
  position: absolute;
  ${({ theme }) => [
    mixins.boxShadow(theme),
    mixins.boxBorderRadius(theme),
    mixins.backgroundColorMain(theme),
    mixins.smallMarginTop(theme),
  ]}
`;

export const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
`;
