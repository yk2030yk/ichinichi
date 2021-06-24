export interface IDataBase {
  insert<T>(data: T): Promise<T>;

  findOne<T>(data: any): Promise<T>;

  find<T>(data: any): Promise<T[]>;

  count(data: any): Promise<number>;

  update(
    query: any,
    data: any,
    options?: { multi?: boolean; upsert?: boolean }
  ): Promise<number>;

  remove(query: any, options?: { multi?: boolean }): Promise<number>;
}

export interface ILocalStorage {
  get: (key: string) => string;
  set: (key: string, value: string) => void;
}
