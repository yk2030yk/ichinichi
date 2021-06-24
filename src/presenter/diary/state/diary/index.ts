import { atom, DefaultValue, selectorFamily } from 'recoil';
import { diaryUseCaseSelector } from '@/presenter/global/state/dependency';
import { DiaryEntry } from '@/useCase/viewModels/diary';

export const selectedYearAtom = atom<number>({
  key: 'diary/atom/selectedYear',
  default: 2021,
});

export const selectedMonthAtom = atom<number>({
  key: 'diary/atom/selectedMonth',
  default: 6,
});

export const diaryAtom = atom<DiaryEntry[]>({
  key: 'diary/atom/diary',
  default: [],
});

export const diaryEntrySelector = selectorFamily<DiaryEntry, string>({
  key: 'diary/selector/diaryEntry',
  get: (date: string) => ({ get }) => {
    const diaryUseCase = get(diaryUseCaseSelector);
    const diary = get(diaryAtom);
    return diaryUseCase.findDiaryEntryFromDiaryByDate(diary, date);
  },
  set: (date: string) => ({ get, set }, newValue) => {
    const diary = get(diaryAtom);
    if (newValue instanceof DefaultValue) return;
    const newDiary = [...diary.filter((v) => v.date !== date), newValue];
    set(diaryAtom, newDiary);
  },
});
