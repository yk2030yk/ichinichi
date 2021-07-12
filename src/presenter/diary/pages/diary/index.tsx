import React from 'react';

import { DiaryPageLayout } from '../../layouts/diary';
import { useLoadDiary } from '../../hooks/diary';
import { useLoadDiaryTags } from '../../hooks/diaryTag';
import { DiaryTagManageModalHandler } from '../../organisms/diaryTag/DiaryTagManageModalHandler';

export const DiaryPage: React.FC = () => {
  useLoadDiaryTags();
  useLoadDiary();
  return (
    <>
      <DiaryPageLayout />
      <DiaryTagManageModalHandler />
    </>
  );
};
