import React from 'react';
import { useRecoilValue } from 'recoil';

import { ConfirmAlert } from '@/presenter/global/molecules/alert/ConfirmAlert';
import { confirmAlertStateAtom } from '@/presenter/global/state/alert';

export const ConfirmAlertHandler: React.FC = () => {
  const open = useRecoilValue(confirmAlertStateAtom);
  return <>{open && <ConfirmAlert />}</>;
};
