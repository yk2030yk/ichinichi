// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends Function
  ? T
  : T extends Record<string, unknown>
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
