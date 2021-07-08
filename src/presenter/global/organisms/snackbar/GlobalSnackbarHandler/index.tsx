import React from 'react';
import { useRecoilValue } from 'recoil';

import { snackbarStateAtom } from '@/presenter/global/state/snackbar';
import { GlobalSnackbar_Info } from '../GlobalSnackbar_Info';
import { GlobalSnackbar_Error } from '../GlobalSnackbar_Error';
import { GlobalSnackbar_Success } from '../GlobalSnackbar_Success';
import { GlobalSnackbar_Warning } from '../GlobalSnackbar_Warning';

export const GlobalSnackbarHandler: React.FC = () => {
  const isOpenInfo = useRecoilValue(snackbarStateAtom('INFO'));
  const isOpenError = useRecoilValue(snackbarStateAtom('ERROR'));
  const isOpenSuccess = useRecoilValue(snackbarStateAtom('SUCCESS'));
  const isOpenWarning = useRecoilValue(snackbarStateAtom('WARNING'));
  return (
    <>
      {isOpenInfo && <GlobalSnackbar_Info />}
      {isOpenError && <GlobalSnackbar_Error />}
      {isOpenSuccess && <GlobalSnackbar_Success />}
      {isOpenWarning && <GlobalSnackbar_Warning />}
    </>
  );
};
