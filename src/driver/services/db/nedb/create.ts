import { NeDataBase } from '.';
import { setup } from './nedb';

export const setupDataBase = (pathname: string) => {
  const nedb = setup(pathname);
  return new NeDataBase(nedb);
};

const DATA_PATH_NAME = 'data/itiniti.nedb';
export const dataBase = setupDataBase(DATA_PATH_NAME);
