import { isNull } from '../isNull';
import { isUndefined } from '../isUndefined';

export const isNullOrUndefined = (value: unknown) =>
  isNull(value) || isUndefined(value);
