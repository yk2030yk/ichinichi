import { settingModalStateAtom } from '@/presenter/global/state/setting';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { SettingModalContent } from '../../../molecules/modal/SettingModalContent';

export const SettingModal: React.FC = () => {
  const open = useRecoilValue(settingModalStateAtom);
  return <>{open && <SettingModalContent />}</>;
};
