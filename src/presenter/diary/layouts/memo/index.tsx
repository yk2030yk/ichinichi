import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { DiaryHeatMap } from '../../organisms/heatmap/DiaryHeatMap';
import { DiaryTimeline } from '../../organisms/timeline/DiaryTimeline';
import { SubMenu } from '../../organisms/submenu/SubMenu';
import * as S from './styled';

export const MemoListLayout: React.FC = () => {
  return (
    <GlobalLayout
      subMenuContent={<SubMenu />}
      mainContent={
        <S.ContentWrapper>
          <S.ContentTop>
            <DiaryHeatMap />
          </S.ContentTop>
          <S.ContentMiddle>
            <DiaryTimeline />
          </S.ContentMiddle>
        </S.ContentWrapper>
      }
    />
  );
};
