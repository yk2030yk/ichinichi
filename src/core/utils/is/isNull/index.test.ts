import { isNull } from '.';

describe('isNull Test', () => {
  test('nullでtrueになる', () => {
    expect(isNull(null)).toBeTruthy();
  });

  test('undefinedでfalseになる', () => {
    expect(isNull(undefined)).toBeFalsy();
  });

  test('null以外でfalseになる', () => {
    expect(isNull('')).toBeFalsy();
  });
});
