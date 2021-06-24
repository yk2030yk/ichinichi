import React from 'react';

import { MemoListLayout } from './layouts/memo';
import { useLoadDiary } from './hooks/diary';
import { useLoadDiaryTags } from './hooks/diaryTag';
import { DiaryTagManageModalHandler } from './organisms/diaryTag/DiaryTagManageModalHandler';

export const ComponentName: React.FC = () => {
  useLoadDiaryTags();
  useLoadDiary();
  return (
    <>
      <MemoListLayout />
      <DiaryTagManageModalHandler />
    </>
  );
};
