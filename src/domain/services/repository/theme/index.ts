import { IThemeRepository } from '@/domain/interfaces/repository/theme';
import { ThemeType } from '@/domain/domainModels/theme';
import { IThemeDriver } from '@/driver/interfaces/drivers/theme';

export class ThemeRepository implements IThemeRepository {
  constructor(private themeDriver: IThemeDriver) {}

  getThemeType() {
    return this.themeDriver.getThemeType();
  }

  setThemeType(themeType: ThemeType) {
    this.themeDriver.setThemeType(themeType);
  }
}
