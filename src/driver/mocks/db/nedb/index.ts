import { IDataBase } from '@/driver/interfaces/db';

export const nedbMock = (): IDataBase => ({
  insert: jest.fn(),
  findOne: jest.fn(),
  find: jest.fn(),
  count: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});
