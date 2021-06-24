import React, { Suspense } from 'react';
import { useSetRecoilState } from 'recoil';

import { Modal } from '@/presenter/core/ui/Modal';
import { settingModalStateAtom } from '@/presenter/global/state/setting';
import { useLockScroll } from '@/presenter/global/hooks/window';
import { ModalItem_Slack } from '../ModalItem_Slack';
import { ModalItem_Theme } from '../ModalItem_Theme';

export const SettingModalContent: React.FC = () => {
  const setOpen = useSetRecoilState(settingModalStateAtom);
  const { clearLockScroll } = useLockScroll();

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    clearLockScroll();
  };

  return (
    <Suspense fallback={null}>
      <Modal close={close} title="環境設定">
        <ModalItem_Theme />
        <ModalItem_Slack />
      </Modal>
    </Suspense>
  );
};
