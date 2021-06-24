import { styled } from '@/styles';
import { smallMarginTopCss, resetFirstItemMarginCss } from '@/styles/mixins';

export const TimelineEditor = styled.div``;

export const TimelineEditorItem = styled.div`
  ${({ theme }) => [smallMarginTopCss(theme), resetFirstItemMarginCss()]}
`;
