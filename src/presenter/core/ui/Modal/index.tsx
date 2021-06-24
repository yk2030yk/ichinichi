import React from 'react';
import { CloseIcon } from '../../atoms/icons';

import * as S from './styled';

type Props = {
  title: string;
  close: (e: React.MouseEvent) => void;
};

export const Modal: React.FC<Props> = ({ title, close, children }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <S.Background onClick={close}>
      <S.ModalContent onClick={stopPropagation}>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalCloseButton>
            <CloseIcon size={20} onClick={close} />
          </S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalContentMain>{children}</S.ModalContentMain>
      </S.ModalContent>
    </S.Background>
  );
};
