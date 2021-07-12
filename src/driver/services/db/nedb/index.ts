import { IDataBase } from '@/driver/interfaces/db';
import { exceptionThrower } from '@/driver/services/exceptionThrower';

import { nedb } from './nedb';

export class NeDataBase implements IDataBase {
  // FIXME: injectするとfindやinsert時にエラーになってしまう。
  // TypeError: Cannot add property 0, object is not extensible
  // constructor(private nedb: Nedb) {}

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
        if (error) exceptionThrower.throwFindException(error.message);
        else resolve(document);
      });
    });
  }

  async find<T>(data: any): Promise<T[]> {
    return new Promise((resolve) => {
      try {
        nedb.find(data).exec((error, document) => {
          if (error) exceptionThrower.throwFindException(error.message);
          else resolve(document);
        });
      } catch (e) {
        exceptionThrower.throwFindException(e.message);
      }
    });
  }

  count(data: any): Promise<number> {
    return new Promise((resolve) => {
      nedb.count(data).exec((error, document) => {
        if (error) exceptionThrower.throwFindException(error.message);
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
