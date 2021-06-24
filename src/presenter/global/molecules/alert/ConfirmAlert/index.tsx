import { Dialog } from '@/presenter/core/ui/Dialog';
import {
  confirmAlertContentAtom,
  confirmAlertStateAtom,
} from '@/presenter/global/state/alert';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const ConfirmAlert: React.FC = () => {
  const { message, ok, cancel } = useRecoilValue(confirmAlertContentAtom);
  const setOpen = useSetRecoilState(confirmAlertStateAtom);

  const onClickOk = () => {
    if (ok) ok();
    setOpen(false);
  };

  const onClickCancel = () => {
    if (cancel) cancel();
    setOpen(false);
  };

  return <Dialog message={message} ok={onClickOk} cancel={onClickCancel} />;
};
