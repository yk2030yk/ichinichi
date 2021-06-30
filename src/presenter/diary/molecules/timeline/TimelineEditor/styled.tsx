import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const TimelineEditor = styled.div``;

export const TimelineEditorItem = styled.div`
  ${({ theme }) => [
    mixins.smallMarginTop(theme),
    mixins.resetFirstItemMargin(),
  ]}
`;
