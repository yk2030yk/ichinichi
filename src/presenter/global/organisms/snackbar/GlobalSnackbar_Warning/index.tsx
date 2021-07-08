import React from 'react';

import { WarningIcon } from '@/presenter/core/atoms/icons';
import { GlobalSnackbar } from '../GlobalSnackbar';

export const GlobalSnackbar_Warning: React.FC = () => (
  <GlobalSnackbar snackbarType="WARNING" icon={<WarningIcon size={20} />} />
);
