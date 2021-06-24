export const isUndefined = (value: unknown) => value === undefined;

export const isNull = (value: unknown) => value === null;

export const isNullOrUndefined = (value: unknown) =>
  isNull(value) || isUndefined(value);
