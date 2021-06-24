import { atom, selector } from 'recoil';

import { dateUseCaseSelector } from '@/presenter/global/state/dependency';
import { diaryEntrySelector, selectedYearAtom } from '../diary';

export const tooltipStateAtom = atom<boolean>({
  key: 'heatMap/atom/tooltipState',
  default: false,
});

export const tooltipDateAtom = atom<string>({
  key: 'heatMap/atom/tooltipDate',
  default: '',
});

export const tooltipPositionAtom = atom<{
  top: number;
  left: number;
}>({
  key: 'heatMap/atom/tooltipPosition',
  default: {
    top: 0,
    left: 0,
  },
});

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

export const tooltipDiaryEntrySelector = selector({
  key: 'heatMap/selector/tooltipDiaryEntry',
  get: ({ get }) => {
    const date = get(tooltipDateAtom);
    const diaryEntry = get(diaryEntrySelector(date));
    return diaryEntry;
  },
});
