import React from 'react';

import * as S from './styled';

type Props = {
  hasDate?: boolean;
  isToday?: boolean;
  textCount?: number;
  onMouseOver?: any;
  onMouseOut?: any;
};

export const HeatMapCell: React.FC<Props> = ({
  hasDate = false,
  isToday = false,
  textCount = 0,
  onMouseOut,
  onMouseOver,
}) => {
  return (
    <S.Col
      hasDate={hasDate}
      isToday={isToday}
      textCount={textCount}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};
