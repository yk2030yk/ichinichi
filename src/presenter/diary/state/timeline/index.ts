import { selector } from 'recoil';

import { dateUseCaseSelector } from '@/presenter/global/state/dependency';
import { selectedYearAtom, selectedMonthAtom } from '../diary';

export const timelineCalendarSelector = selector({
  key: 'timeline/selector/timelineCalendar',
  get: ({ get }) => {
    const dateUseCase = get(dateUseCaseSelector);
    const year = get(selectedYearAtom);
    const timelineCalendar = dateUseCase.getTimelineCalendar(year);
    return timelineCalendar;
  },
});

export const timelineMonthCalendarSelector = selector({
  key: 'timeline/selector/timelineMonthCalendar',
  get: ({ get }) => {
    const month = get(selectedMonthAtom);
    const timelineCalendar = get(timelineCalendarSelector);
    return timelineCalendar.find((c) => c.month === month);
  },
});

export const monthListSelector = selector({
  key: 'timeline/selector/monthList',
  get: ({ get }) => {
    const timelineCalendar = get(timelineCalendarSelector);
    const dateUseCase = get(dateUseCaseSelector);
    const month = get(selectedMonthAtom);
    const monthTexts = dateUseCase.getMonthTexts();

    return timelineCalendar.map((c) => ({
      month: c.month,
      year: c.year,
      selected: c.month === month,
      monthText: monthTexts[c.month],
    }));
  },
});
