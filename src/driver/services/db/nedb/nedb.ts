import Nedb from 'nedb';
import path from 'path';

const setup = (pathname: string) => {
  const filename = path
    .join(__dirname, pathname)
    .replace('app.asar', 'app.asar.unpacked');

  return new Nedb({
    filename,
    autoload: true,
  });
};

const DATA_PATH_NAME = 'data/itiniti.nedb';

export const nedb = setup(DATA_PATH_NAME);
