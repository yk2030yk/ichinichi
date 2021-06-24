import React from 'react';

import { CheckIcon } from '@/presenter/core/atoms/icons';
import { GlobalSnackbar } from '../GlobalSnackbar';

export const GlobalSnackbar_Success: React.FC = () => (
  <GlobalSnackbar snackbarType="SUCCESS" icon={<CheckIcon size={20} />} />
);
