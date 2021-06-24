import { DataBaseException } from '@/core/exceptions';

class DriverExceptionThrower {
  throwUpdateException() {
    throw new DataBaseException('');
  }

  throwFindException() {
    throw new DataBaseException('');
  }

  throwDeleteException() {
    throw new DataBaseException('');
  }

  throwInsertException() {
    throw new DataBaseException('');
  }
}

export const exceptionThrower = new DriverExceptionThrower();
