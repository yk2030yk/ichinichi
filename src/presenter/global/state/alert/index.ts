import { atom } from 'recoil';

export type AlertContent = {
  message: string | React.ReactElement;
  ok?: () => void;
  cancel?: () => void;
};

export const confirmAlertStateAtom = atom<boolean>({
  key: 'global/alert/atom/confirmAlertStateAtom',
  default: false,
});

export const confirmAlertContentAtom = atom<AlertContent>({
  key: 'global/alert/atom/confirmAlertContentAtom',
  default: {
    message: '',
  },
});
