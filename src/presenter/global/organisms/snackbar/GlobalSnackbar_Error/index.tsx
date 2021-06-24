import React from 'react';

import { ErrorIcon } from '@/presenter/core/atoms/icons';
import { GlobalSnackbar } from '../GlobalSnackbar';

export const GlobalSnackbar_Error: React.FC = () => (
  <GlobalSnackbar snackbarType="ERROR" icon={<ErrorIcon size={20} />} />
);
