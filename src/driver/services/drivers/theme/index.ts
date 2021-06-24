import { ILocalStorage } from '@/driver/interfaces/db';
import { IThemeDriver } from '@/driver/interfaces/drivers/theme';

export class ThemeDriver implements IThemeDriver {
  constructor(private storage: ILocalStorage) {}

  getThemeType() {
    return this.storage.get('theme');
  }

  setThemeType(value: string) {
    this.storage.set('theme', value);
  }
}
