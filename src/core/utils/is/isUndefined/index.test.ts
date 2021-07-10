import { isUndefined } from '.';

describe('isUndefined Test', () => {
  test('undefinedでtrueになる', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  test('nullでfalseになる', () => {
    expect(isUndefined(null)).toBeFalsy();
  });

  test('undefined以外でfalseになる', () => {
    expect(isUndefined('')).toBeFalsy();
  });
});
