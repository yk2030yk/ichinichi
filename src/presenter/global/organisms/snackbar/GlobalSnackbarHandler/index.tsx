import React from 'react';
import { useRecoilValue } from 'recoil';

import { snackbarStateAtom } from '@/presenter/global/state/snackbar';
import { GlobalSnackbar_Info } from '../GlobalSnackbar_Info';
import { GlobalSnackbar_Error } from '../GlobalSnackbar_Error';
import { GlobalSnackbar_Success } from '../GlobalSnackbar_Success';

export const GlobalSnackbarHandler: React.FC = () => {
  const isOpenInfo = useRecoilValue(snackbarStateAtom('INFO'));
  const isOpenError = useRecoilValue(snackbarStateAtom('ERROR'));
  const isOpenSuccess = useRecoilValue(snackbarStateAtom('SUCCESS'));
  return (
    <>
      {isOpenInfo && <GlobalSnackbar_Info />}
      {isOpenError && <GlobalSnackbar_Error />}
      {isOpenSuccess && <GlobalSnackbar_Success />}
    </>
  );
};
