import Nedb from 'nedb';
import path from 'path';

export const setup = (pathname: string) => {
  const filename = path
    .join(__dirname, pathname)
    .replace('app.asar', 'app.asar.unpacked');

  return new Nedb({
    filename,
    autoload: true,
  });
};
