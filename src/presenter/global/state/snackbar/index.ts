import { atomFamily } from 'recoil';

export type SnackbarType = 'INFO' | 'ERROR' | 'SUCCESS';

export const snackbarStateAtom = atomFamily<boolean, SnackbarType>({
  key: 'global/snackbar/atom/snackbarState',
  default: false,
});

export const snackbarContentAtom = atomFamily<
  {
    message: string;
  },
  SnackbarType
>({
  key: 'global/snackbar/atom/snackbarContent',
  default: {
    message: '',
  },
});
