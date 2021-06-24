import React from 'react';

import * as S from './styled';

type Props = {
  title: string;
};

export const ModalItem: React.FC<Props> = ({ children, title }) => {
  return (
    <S.ModalItem>
      <S.ModalItemTitle>{title}</S.ModalItemTitle>
      <S.ModalItemContent>{children}</S.ModalItemContent>
    </S.ModalItem>
  );
};
