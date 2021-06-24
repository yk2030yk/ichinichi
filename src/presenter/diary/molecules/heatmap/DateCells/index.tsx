import React from 'react';
import { useRecoilValue } from 'recoil';

import { DateCell } from '../DateCell';
import { heatMapCalendarSelector } from '../../../state/heatmap';

export const DateCells: React.FC = () => {
  const heatMapCalendar = useRecoilValue(heatMapCalendarSelector);
  return (
    <>
      {heatMapCalendar.map((data) => (
        <DateCell data={data} key={data.date} />
      ))}
    </>
  );
};
