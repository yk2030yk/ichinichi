import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const ResizePanel = styled.div<{ width: number }>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  height: 100%;
`;

export const ResizeContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResizeBar = styled.div<{ isDragging: boolean }>`
  height: 100%;
  width: 2px;
  cursor: ew-resize;
  ${({ theme, isDragging }) => [
    mixins.backgroundColorMain(theme),
    isDragging && mixins.backgroundColorLight(theme),
    mixins.boxHover(theme),
  ]}
`;
