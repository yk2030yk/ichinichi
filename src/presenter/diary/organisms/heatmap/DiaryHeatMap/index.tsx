import React from 'react';

import * as S from './styled';
import { WeekCells } from '../../../molecules/heatmap/WeekCells';
import { DateCells } from '../../../molecules/heatmap/DateCells';

export const DiaryHeatMap: React.FC = () => {
  return (
    <>
      <S.HeatMap>
        <S.HeatMapHeader>
          <S.HeatMapTitle>2021</S.HeatMapTitle>
        </S.HeatMapHeader>
        <S.HeatMapContent>
          <S.HeatMapGraph>
            <WeekCells />
            <DateCells />
          </S.HeatMapGraph>
        </S.HeatMapContent>
      </S.HeatMap>
    </>
  );
};
