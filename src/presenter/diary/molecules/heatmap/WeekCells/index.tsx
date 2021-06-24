import React from 'react';
import { useRecoilValue } from 'recoil';

import { weekTextsSelector } from '../../../state/heatmap';

export const WeekCells: React.FC = () => {
  const weekTexts = useRecoilValue(weekTextsSelector);
  return (
    <>
      {weekTexts.map((d) => (
        <div key={d}>{d}</div>
      ))}
    </>
  );
};
