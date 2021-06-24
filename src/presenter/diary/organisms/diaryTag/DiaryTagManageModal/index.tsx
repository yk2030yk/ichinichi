import React from 'react';

import { Modal } from '@/presenter/core/ui/Modal';
import { useCloseDiaryTagSettingModal } from '@/presenter/diary/hooks/diaryTag/modal';
import { DiaryTagManager } from '../DiaryTagManager';

export const DiaryTagManageModal: React.FC = () => {
  const close = useCloseDiaryTagSettingModal();
  return (
    <Modal title="タグ設定" close={close}>
      <DiaryTagManager />
    </Modal>
  );
};
