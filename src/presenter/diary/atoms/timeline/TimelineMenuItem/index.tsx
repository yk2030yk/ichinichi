import React from 'react';

import * as S from './styled';

type Props = {
  onClick: (e: React.MouseEvent) => void;
  icon?: React.ReactElement;
};

export const TimelineMenuItem: React.FC<Props> = ({
  children,
  onClick,
  icon,
}) => {
  return (
    <S.Item onClick={onClick}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Item>
  );
};
