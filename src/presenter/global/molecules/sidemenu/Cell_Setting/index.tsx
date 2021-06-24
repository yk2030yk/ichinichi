import React from 'react';
import { useSetRecoilState } from 'recoil';

import { SettingIcon } from '@/presenter/core/atoms/icons';
import { SideMenuCell } from '@/presenter/global/atoms/sidemenu/SideMenuCell';
import { settingModalStateAtom } from '@/presenter/global/state/setting';
import { useLockScroll } from '@/presenter/global/hooks/window';

export const Cell_Setting: React.FC = () => {
  const setSettingModal = useSetRecoilState(settingModalStateAtom);
  const { lockScroll } = useLockScroll();

  const openSettingModal = () => {
    setSettingModal(true);
    lockScroll();
  };

  return (
    <SideMenuCell onClick={openSettingModal}>
      <SettingIcon size={20} />
    </SideMenuCell>
  );
};
