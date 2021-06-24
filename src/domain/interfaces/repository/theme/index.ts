import { ThemeType } from '@/domain/domainModels/theme';

export interface IThemeRepository {
  getThemeType: () => ThemeType;
  setThemeType: (themeType: ThemeType) => void;
}
