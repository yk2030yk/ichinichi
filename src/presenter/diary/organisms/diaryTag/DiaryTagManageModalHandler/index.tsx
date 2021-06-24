import React from 'react';

import { useDiaryTagSettingModal } from '@/presenter/diary/hooks/diaryTag/modal';
import { DiaryTagManageModal } from '../DiaryTagManageModal';

export const DiaryTagManageModalHandler: React.FC = () => {
  const isOpen = useDiaryTagSettingModal();
  return <>{isOpen && <DiaryTagManageModal />}</>;
};
