import { atom, selector } from 'recoil';
import { DiaryTag } from '@/useCase/viewModels/diary';

export const diaryTagsAtom = atom<DiaryTag[]>({
  key: 'diaryTag/atom/diaryTagsAtom',
  default: [],
});

export const diaryTagLabelAtom = atom<DiaryTag['label']>({
  key: 'diaryTag/atom/diaryTagLabelAtom',
  default: '',
});

export const diaryTagColorAtom = atom<DiaryTag['color']>({
  key: 'diaryTag/atom/diaryTagColorAtom',
  default: '#22194D',
});

export const diaryTagSettingModalAtom = atom<boolean>({
  key: 'diaryTag/atom/diaryTagSettingModalAtom',
  default: false,
});

export const diaryTagFormSelector = selector<DiaryTag>({
  key: 'diaryTag/selector/diaryTagFormSelector',
  get: ({ get }) => {
    const label = get(diaryTagLabelAtom);
    const color = get(diaryTagColorAtom);
    return { label, color };
  },
});
