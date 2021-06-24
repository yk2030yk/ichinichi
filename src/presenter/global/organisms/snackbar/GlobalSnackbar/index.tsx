import React from 'react';
import { useRecoilValue } from 'recoil';

import {
  snackbarContentAtom,
  SnackbarType,
} from '@/presenter/global/state/snackbar';
import { SnackbarBase } from '@/presenter/global/atoms/snackbar/SnackbarBase';
import { useCloseSnackbar } from '@/presenter/global/hooks/snackbar';

type Props = {
  snackbarType: SnackbarType;
  icon: any;
};

export const GlobalSnackbar: React.FC<Props> = ({ snackbarType, icon }) => {
  const { message } = useRecoilValue(snackbarContentAtom(snackbarType));
  const closeSnackbar = useCloseSnackbar(snackbarType);

  const close = (e?: React.MouseEvent) => {
    e?.preventDefault();
    closeSnackbar();
  };

  return (
    <SnackbarBase
      icon={icon}
      message={message}
      onClick={close}
      snackbarType={snackbarType}
    />
  );
};
