import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useDateUseCase } from '@/presenter/global/hooks/dependency';
import { diaryEntrySelector } from '../../../state/diary';
import { HeatMapCell } from '../../../atoms/heatmap/HeatMapCell';
import { Tooltip } from '../Tooltip';

type Props = {
  data: {
    date: string;
    year: number;
    month: number;
    day: number;
  };
};

export const DateCell: React.FC<Props> = ({ data }) => {
  const dateUseCase = useDateUseCase();
  const diaryEntry = useRecoilValue(diaryEntrySelector(data.date));

  const [isOpen, setIsOpen] = useState(false);

  const onMouseOver = () => {
    if (!diaryEntry.content) return;
    setIsOpen(true);
  };

  const onMouseOut = () => {
    setIsOpen(false);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <HeatMapCell
        hasDate
        isToday={dateUseCase.isToday(diaryEntry.date)}
        textCount={diaryEntry.content.length}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
      <Tooltip diaryEntry={diaryEntry} isOpen={isOpen} close={close} />
    </div>
  );
};
