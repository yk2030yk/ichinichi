import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { DiaryTagManager } from '@/presenter/diary/organisms/diaryTag/DiaryTagManager';
import { SubMenu } from '@/presenter/diary/organisms/submenu/SubMenu';
import * as S from './styled';

export const ManageDiaryTagLayout: React.FC = () => {
  return (
    <GlobalLayout
      subMenuContent={<SubMenu />}
      mainContent={
        <S.Wrapper>
          <DiaryTagManager />
        </S.Wrapper>
      }
    />
  );
};
