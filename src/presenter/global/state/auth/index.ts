import { atom } from 'recoil';

export const userIdAtom = atom({
  key: 'global/auth/atom/userIdAtom',
  default: 'xxx',
});
