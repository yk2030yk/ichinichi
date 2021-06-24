import React from 'react';

import { ManageDiaryTagLayout } from './layouts/diaryTag/ManageDiaryTagLayout';
import { useLoadDiaryTags } from './hooks/diaryTag';

export const ManageDiaryTagPage: React.FC = () => {
  useLoadDiaryTags();
  return <ManageDiaryTagLayout />;
};
