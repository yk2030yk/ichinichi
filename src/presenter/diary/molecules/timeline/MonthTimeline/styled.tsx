import { styled } from '@/styles';
import { fontLargeSizeCss } from '@/styles/mixins';

export const MonthTimeline = styled.div`
  width: 100%;
`;

export const MonthTimelineTitle = styled.div`
  ${({ theme }) => fontLargeSizeCss(theme)}
  width: 100%;
`;

export const TimelineCardList = styled.div`
  width: 100%;
`;
