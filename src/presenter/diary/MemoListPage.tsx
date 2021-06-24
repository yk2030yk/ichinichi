import React from 'react';

import { MemoListLayout } from './layouts/memo';
import { useLoadDiary } from './hooks/diary';
import { useLoadDiaryTags } from './hooks/diaryTag';

export const ComponentName: React.FC = () => {
  useLoadDiary();
  useLoadDiaryTags();
  return <MemoListLayout />;
};
