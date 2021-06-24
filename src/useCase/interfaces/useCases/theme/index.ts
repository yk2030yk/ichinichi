import { ThemeType } from '@/domain/domainModels/theme';
import { Theme } from '@/styles';

export interface IThemeUseCase {
  getStoredThemeType: () => ThemeType;
  storeThemeType: (themeType: ThemeType) => void;
  getThemeByType: (themeType: ThemeType) => Theme;
  getTagColor: (theme: Theme) => string[];
}
