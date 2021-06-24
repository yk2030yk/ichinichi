import { isNullOrUndefined } from '@/core/utils/value';
import { ILocalStorage } from '@/driver/interfaces/db';

export class LocalStorage implements ILocalStorage {
  get(key: string) {
    const item = window.localStorage.getItem(key);
    if (isNullOrUndefined(item)) {
      throw new Error('hoge');
    }
    return item as string;
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}
