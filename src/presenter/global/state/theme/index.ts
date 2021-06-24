import { atom } from 'recoil';
import { ThemeType, THEME_TYPE } from '@/domain/domainModels/theme';

export const themeTypeAtom = atom<ThemeType>({
  key: 'global/theme/themeType',
  default: THEME_TYPE.LIGHT,
});
