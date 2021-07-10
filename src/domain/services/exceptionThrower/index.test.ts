import { exceptionThrower } from '.';

describe('exceptionThrower.exceptionThrower Test', () => {
  test('エラーが投げられる', () => {
    expect(() => {
      exceptionThrower.throwMapperException();
    }).toThrow('Invalid DomainModel. Could not mapped DataModel.');
  });
});
