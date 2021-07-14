import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { DiaryTimeline } from '../../organisms/timeline/DiaryTimeline';
import { SubMenu } from '../../organisms/submenu/SubMenu';

import * as S from './styled';

export const DiaryPageLayout: React.FC = () => {
  return (
    <GlobalLayout
      subMenuContent={<SubMenu />}
      mainContent={
        <S.ContentWrapper>
          <DiaryTimeline />
        </S.ContentWrapper>
      }
    />
  );
};
