import React from 'react';

import { TimelineCard } from '@/presenter/diary/molecules/timeline/TimelineCard';
import { useToday } from '@/presenter/global/hooks/date';

export const TodayDiaryTimelineCard: React.FC = () => {
  const today = useToday();
  return (
    <TimelineCard date={today.date} title={`Today's Diary(${today.date})`} />
  );
};
