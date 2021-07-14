import { selector } from 'recoil';
import { dateUseCaseSelector } from '@/presenter/global/state/dependency';

export const todaySelector = selector({
  key: 'date/selector/today',
  get: ({ get }) => {
    const dateUseCase = get(dateUseCaseSelector);
    return dateUseCase.getToday();
  },
});
