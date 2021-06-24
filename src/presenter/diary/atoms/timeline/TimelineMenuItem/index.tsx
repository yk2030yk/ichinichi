import React from 'react';

import * as S from './styled';

type Props = {
  onClick: (e: React.MouseEvent) => void;
};

export const TimelineMenuItem: React.FC<Props> = ({ children, onClick }) => {
  return <S.Item onClick={onClick}>{children}</S.Item>;
};
