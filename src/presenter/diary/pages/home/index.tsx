import React from 'react';

import { useReloadToday } from '@/presenter/global/hooks/date';
import { HomePageLayout } from '../../layouts/HomePageLayout';
import { useLoadDiary } from '../../hooks/diary';
import { useLoadDiaryTags } from '../../hooks/diaryTag';
import { DiaryTagManageModalHandler } from '../../organisms/diaryTag/DiaryTagManageModalHandler';

export const HomePage: React.FC = () => {
  useReloadToday();
  useLoadDiaryTags();
  useLoadDiary();
  return (
    <>
      <HomePageLayout />
      <DiaryTagManageModalHandler />
    </>
  );
};
