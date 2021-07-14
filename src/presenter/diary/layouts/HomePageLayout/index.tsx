import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { DiaryHeatMap } from '../../organisms/heatmap/DiaryHeatMap';
import { PickedGoalCardList } from '../../organisms/objective/PickedGoalCardList';
import * as S from './styled';
import { TodayDiaryTimelineCard } from '../../organisms/timeline/TodayDiaryTimelineCard';

export const HomePageLayout: React.FC = () => {
  return (
    <GlobalLayout
      mainContent={
        <S.ContentWrapper>
          <S.PickedGoalCardListArea>
            <PickedGoalCardList />
          </S.PickedGoalCardListArea>
          <S.DiaryHeatMapArea>
            <DiaryHeatMap />
          </S.DiaryHeatMapArea>
          <TodayDiaryTimelineCard />
        </S.ContentWrapper>
      }
    />
  );
};
