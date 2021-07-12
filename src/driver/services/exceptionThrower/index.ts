import { DataBaseException } from '@/core/exceptions';

class DriverExceptionThrower {
  throwUpdateException() {
    throw new DataBaseException('');
  }

  throwFindException(message: string) {
    throw new DataBaseException(`findに失敗しました。${message}`);
  }

  throwDeleteException() {
    throw new DataBaseException('');
  }

  throwInsertException() {
    throw new DataBaseException('');
  }
}

export const exceptionThrower = new DriverExceptionThrower();
