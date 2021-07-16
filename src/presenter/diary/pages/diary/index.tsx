import React from 'react';

import { useReloadToday } from '@/presenter/global/hooks/date';
import { DiaryPageLayout } from '../../layouts/DiaryPageLayout';
import { useLoadDiary } from '../../hooks/diary';
import { useLoadDiaryTags } from '../../hooks/diaryTag';
import { useReloadTimelineCalendar } from '../../hooks/timeline';
import { DiaryTagManageModalHandler } from '../../organisms/diaryTag/DiaryTagManageModalHandler';

export const DiaryPage: React.FC = () => {
  useReloadToday();
  useLoadDiaryTags();
  useLoadDiary();
  useReloadTimelineCalendar();
  return (
    <>
      <DiaryPageLayout />
      <DiaryTagManageModalHandler />
    </>
  );
};
