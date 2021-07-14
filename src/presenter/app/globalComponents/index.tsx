import React from 'react';

import { GlobalSnackbarHandler } from '@/presenter/global/organisms/snackbar/GlobalSnackbarHandler';
import { ConfirmAlertHandler } from '@/presenter/global/organisms/alert/ConfirmAlertHandler';

/**
 * Globalで保持するコンポーネントを定義
 */
export const GlobalComponents: React.FC = () => {
  return (
    <>
      <GlobalSnackbarHandler />
      <ConfirmAlertHandler />
    </>
  );
};
