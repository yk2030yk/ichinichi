import { IThemeRepository } from '@/domain/interfaces/repository/theme';
import { ThemeType, THEME_TYPE } from '@/domain/domainModels/theme';
import { darkTheme, lightTheme } from '@/styles/themes';
import { IThemeUseCase } from '@/useCase/interfaces/useCases/theme';
import { Theme } from '@/styles';

export class ThemeUseCase implements IThemeUseCase {
  constructor(private themeRepository: IThemeRepository) {}

  getStoredThemeType() {
    return this.themeRepository.getThemeType();
  }

  storeThemeType(themeType: ThemeType) {
    return this.themeRepository.setThemeType(themeType);
  }

  getThemeByType(themeType: ThemeType) {
    switch (themeType) {
      case THEME_TYPE.LIGHT:
        return lightTheme;
      case THEME_TYPE.DARK:
        return darkTheme;
      default:
        return lightTheme;
    }
  }

  getTagColor(theme: Theme) {
    const colors = theme.palette.tag;
    return [
      colors.red.light,
      colors.red.main,
      colors.red.dark,

      colors.green.light,
      colors.green.main,
      colors.green.dark,

      colors.blue.light,
      colors.blue.main,
      colors.blue.dark,

      colors.yellow.light,
      colors.yellow.main,
      colors.yellow.dark,
    ];
  }
}
