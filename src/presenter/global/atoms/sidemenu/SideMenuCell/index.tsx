import React from 'react';

import * as S from './styled';

type Props = {
  onClick: () => void;
  selected?: boolean;
};

export const SideMenuCell: React.FC<Props> = ({
  children,
  onClick,
  selected = false,
}) => {
  return (
    <S.Cell onClick={onClick} selected={selected}>
      {children}
    </S.Cell>
  );
};
