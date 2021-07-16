import { atom, selector } from 'recoil';

import { dateUseCaseSelector } from '@/presenter/global/state/dependency';
import { todaySelector } from '@/presenter/global/state/date';
import { selectedYearAtom, selectedMonthAtom } from '../diary';

export const reloadTimelineCalendarAtom = atom({
  key: 'timeline/atom/reloadTimelineCalendarAtom',
  default: 0,
});

export const timelineCalendarSelector = selector({
  key: 'timeline/selector/timelineCalendar',
  get: ({ get }) => {
    get(reloadTimelineCalendarAtom);
    const today = get(todaySelector);
    const dateUseCase = get(dateUseCaseSelector);
    const year = get(selectedYearAtom) || today.year;
    const timelineCalendar = dateUseCase.getTimelineCalendar(year);
    return timelineCalendar;
  },
});

export const timelineMonthCalendarSelector = selector({
  key: 'timeline/selector/timelineMonthCalendar',
  get: ({ get }) => {
    const today = get(todaySelector);
    const month = get(selectedMonthAtom) || today.month;
    const timelineCalendar = get(timelineCalendarSelector);
    return timelineCalendar.find((c) => c.month === month);
  },
});

export const monthListSelector = selector({
  key: 'timeline/selector/monthList',
  get: ({ get }) => {
    const today = get(todaySelector);
    const timelineCalendar = get(timelineCalendarSelector);
    const dateUseCase = get(dateUseCaseSelector);
    const month = get(selectedMonthAtom) || today.month;
    const monthTexts = dateUseCase.getMonthTexts();

    return timelineCalendar.map((c) => ({
      month: c.month,
      year: c.year,
      selected: c.month === month,
      monthText: monthTexts[c.month],
    }));
  },
});
