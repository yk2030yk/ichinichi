import React from 'react';

import { InfoIcon } from '@/presenter/core/atoms/icons';
import { GlobalSnackbar } from '../GlobalSnackbar';

export const GlobalSnackbar_Info: React.FC = () => (
  <GlobalSnackbar snackbarType="INFO" icon={<InfoIcon size={20} />} />
);
