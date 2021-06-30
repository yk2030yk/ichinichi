import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const MonthTimeline = styled.div`
  width: 100%;
`;

export const MonthTimelineTitle = styled.div`
  ${({ theme }) => mixins.fontLargeSize(theme)}
  width: 100%;
`;

export const TimelineCardList = styled.div`
  width: 100%;
`;
