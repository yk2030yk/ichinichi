import { atom, selector } from 'recoil';
import { dateUseCaseSelector } from '@/presenter/global/state/dependency';

export const reloadTodayAtom = atom({
  key: 'date/atom/reloadToday',
  default: 0,
});

export const todaySelector = selector({
  key: 'date/selector/today',
  get: ({ get }) => {
    get(reloadTodayAtom);
    const dateUseCase = get(dateUseCaseSelector);
    return dateUseCase.getToday();
  },
});
