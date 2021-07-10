import { LocalStorage } from '.';

describe('LocalStorage Test', () => {
  const localStorage = new LocalStorage();

  // window.localStorageのモック作成
  const existKey = 'existKey';
  const notExistKey = 'notExistKey';
  const existKeyValue = 'existKeyValue';

  const windowLocalStorageMock = {
    getItem: jest.fn().mockImplementation((key: string) => {
      if (key === existKey) return existKeyValue;
      return undefined;
    }),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  Object.defineProperty(window, 'localStorage', {
    value: windowLocalStorageMock,
  });

  describe('get Test', () => {
    afterEach(() => {
      windowLocalStorageMock.getItem.mockClear();
    });

    test('値が存在し正常に取得ができる', async () => {
      const result = localStorage.get(existKey);
      expect(windowLocalStorageMock.getItem.mock.calls.length).toBe(1);
      expect(windowLocalStorageMock.getItem.mock.calls[0].length).toBe(1);
      expect(windowLocalStorageMock.getItem.mock.calls[0][0]).toBe(existKey);
      expect(result).toBe(existKeyValue);
    });

    test('値が存在しない', async () => {
      expect(() => {
        localStorage.get(notExistKey);
      }).toThrowError('localStorageに値が存在しません。(key: notExistKey)');
      expect(windowLocalStorageMock.getItem.mock.calls.length).toBe(1);
      expect(windowLocalStorageMock.getItem.mock.calls[0].length).toBe(1);
      expect(windowLocalStorageMock.getItem.mock.calls[0][0]).toBe(notExistKey);
    });
  });

  describe('set Test', () => {
    afterEach(() => {
      windowLocalStorageMock.setItem.mockClear();
    });

    test('登録ができる', async () => {
      const key = 'test';
      const value = 'value';
      localStorage.set(key, value);
      expect(windowLocalStorageMock.setItem.mock.calls.length).toBe(1);
      expect(windowLocalStorageMock.setItem.mock.calls[0].length).toBe(2);
      expect(windowLocalStorageMock.setItem.mock.calls[0][0]).toBe(key);
      expect(windowLocalStorageMock.setItem.mock.calls[0][1]).toBe(value);
    });
  });
});
