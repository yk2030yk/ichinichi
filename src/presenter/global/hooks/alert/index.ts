import { useSetRecoilState } from 'recoil';

import {
  confirmAlertContentAtom,
  confirmAlertStateAtom,
  AlertContent,
} from '@/presenter/global/state/alert';

export const useOpenConfirmAlert = () => {
  const setContent = useSetRecoilState(confirmAlertContentAtom);
  const setOpen = useSetRecoilState(confirmAlertStateAtom);

  return (content: AlertContent) => {
    setContent(content);
    setOpen(true);
  };
};
