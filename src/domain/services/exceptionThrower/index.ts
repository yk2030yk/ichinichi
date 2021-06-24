import { InvalidValueException } from '@/core/exceptions';

class DomainExceptionThrower {
  throwMapperException() {
    throw new InvalidValueException(
      'Invalid DomainModel. Could not mapped DataModel.'
    );
  }
}

export const exceptionThrower = new DomainExceptionThrower();
