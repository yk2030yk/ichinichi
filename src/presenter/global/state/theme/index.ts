import { atom } from 'recoil';
import { ThemeType } from '@/domain/domainModels/theme';

export const themeTypeAtom = atom<ThemeType | null>({
  key: 'global/theme/themeType',
  default: null,
});
