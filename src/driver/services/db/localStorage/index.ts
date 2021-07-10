import { isNullOrUndefined } from '@/core/utils/is';
import { ILocalStorage } from '@/driver/interfaces/db';

export class LocalStorage implements ILocalStorage {
  get(key: string) {
    const item = window.localStorage.getItem(key);
    if (isNullOrUndefined(item)) {
      throw new Error(`localStorageに値が存在しません。(key: ${key})`);
    }
    return item as string;
  }

  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}
