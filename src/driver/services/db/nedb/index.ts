import { IDataBase } from '@/driver/interfaces/db';
import { exceptionThrower } from '@/driver/services/exceptionThrower';

import { nedb } from './nedb';

export class NeDataBase implements IDataBase {
  insert<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
      nedb.insert(data, (error, document) => {
        if (error) exceptionThrower.throwInsertException();
        else resolve(document);
      });
    });
  }

  findOne<T>(data: any): Promise<T> {
    return new Promise((resolve) => {
      nedb.findOne(data, (error, document) => {
        if (error) exceptionThrower.throwFindException();
        else resolve(document);
      });
    });
  }

  find<T>(data: any): Promise<T[]> {
    return new Promise((resolve) => {
      nedb.find(data).exec((error, document) => {
        if (error) exceptionThrower.throwFindException();
        else resolve(document);
      });
    });
  }

  count(data: any): Promise<number> {
    return new Promise((resolve) => {
      nedb.count(data).exec((error, document) => {
        if (error) exceptionThrower.throwFindException();
        else resolve(document);
      });
    });
  }

  update(
    query: any,
    data: any,
    options = {
      multi: true,
      upsert: true,
    }
  ): Promise<number> {
    return new Promise((resolve) => {
      nedb.update(query, data, options, (error, document) => {
        if (error) exceptionThrower.throwUpdateException();
        else resolve(document);
      });
    });
  }

  remove(query: any, options = { multi: true }): Promise<number> {
    return new Promise((resolve) => {
      nedb.remove(query, options, (error, document) => {
        if (error) exceptionThrower.throwUpdateException();
        else resolve(document);
      });
    });
  }
}
