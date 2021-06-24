import { selector } from 'recoil';

import { dateUseCaseSelector } from '@/presenter/global/state/dependency';
import { selectedYearAtom } from '../diary';

export const heatMapCalendarSelector = selector({
  key: 'heatMap/selector/heatMapCalendar',
  get: ({ get }) => {
    const dateUseCase = get(dateUseCaseSelector);
    const year = get(selectedYearAtom);
    const heatMapCalendar = dateUseCase.getHeatMapCalendar(year);
    return heatMapCalendar;
  },
});

export const weekTextsSelector = selector({
  key: 'heatMap/selector/weekTexts',
  get: ({ get }) => {
    const dateUseCase = get(dateUseCaseSelector);
    const texts = dateUseCase.getWeekTexts();
    return texts;
  },
});
