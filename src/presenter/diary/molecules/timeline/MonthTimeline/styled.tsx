import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const MonthTimeline = styled.div`
  ${() => [mixins.width100Per()]}
`;

export const MonthTimelineTitle = styled.div`
  ${[mixins.width100Per(), mixins.fontLargeSize()]}
`;

export const TimelineCardList = styled.div`
  ${() => [mixins.width100Per()]}
`;
