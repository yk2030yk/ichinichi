import React from 'react';

import { EditDiaryTagForm } from '@/presenter/diary/molecules/diaryTag/EditDiaryTagForm';
import { EditDiaryTagList } from '@/presenter/diary/molecules/diaryTag/EditDiaryTagList';
import * as S from './styled';

export const DiaryTagManager: React.FC = () => {
  return (
    <div>
      <EditDiaryTagForm />
      <S.TagListArea>
        <EditDiaryTagList />
      </S.TagListArea>
    </div>
  );
};
