import { isNullOrUndefined } from '.';

describe('isNullOrUndefined Test', () => {
  test('nullでtrueになる', () => {
    expect(isNullOrUndefined(null)).toBeTruthy();
  });

  test('undefinedでtrueになる', () => {
    expect(isNullOrUndefined(undefined)).toBeTruthy();
  });

  test('null以外でfalseになる', () => {
    expect(isNullOrUndefined('')).toBeFalsy();
  });
});
