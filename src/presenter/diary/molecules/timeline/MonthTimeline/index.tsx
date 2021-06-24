import React from 'react';
import { useRecoilValue } from 'recoil';

import { TimelineCard } from '../TimelineCard';
import { timelineMonthCalendarSelector } from '../../../state/timeline';
import * as S from './styled';

export const MonthTimeline: React.FC = () => {
  const timelineMonthCalendar = useRecoilValue(timelineMonthCalendarSelector);

  if (!timelineMonthCalendar) return null;

  return (
    <S.MonthTimeline>
      <S.MonthTimelineTitle>{timelineMonthCalendar.title}</S.MonthTimelineTitle>
      <S.TimelineCardList>
        {timelineMonthCalendar.dates.map((d) => (
          <TimelineCard key={d.date} date={d.date} title={d.formattedDate} />
        ))}
      </S.TimelineCardList>
    </S.MonthTimeline>
  );
};
