import { isUndefined, isNull, isNullOrUndefined } from '.';

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
