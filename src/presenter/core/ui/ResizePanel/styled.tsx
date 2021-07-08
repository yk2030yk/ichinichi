import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const ResizePanel = styled.div<{ width: number }>`
  ${({ width }) => [mixins.width(width)]}
  ${mergeMixins([mixins.height100Per])}
  display: flex;
  align-items: stretch;
`;

export const ResizeContent = styled.div`
  ${mergeMixins([mixins.width100Per, mixins.height100Per])}
`;

export const ResizeBar = styled.div<{ isDragging: boolean }>`
  ${mergeMixins([
    mixins.height100Per,
    mixins.cursorEWResize,
    mixins.boxHover,
    mixins.backgroundColorMain,
    mixins.width(4),
  ])}
  ${({ theme, isDragging }) => [
    isDragging && mixins.backgroundColorLight({ theme }),
  ]}
`;
