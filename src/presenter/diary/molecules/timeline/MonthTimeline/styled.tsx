import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const MonthTimeline = styled.div`
  ${() => [mixins.width100Per()]}
`;

export const MonthTimelineTitle = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.fontLargeSize(theme)]}
`;

export const TimelineCardList = styled.div`
  ${() => [mixins.width100Per()]}
`;
