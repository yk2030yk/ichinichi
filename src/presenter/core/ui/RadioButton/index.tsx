import React from 'react';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

import * as S from './styled';

type Props = {
  checked: boolean;
  label: string;
  onClick: () => void;
};

export const RadioButton: React.FC<Props> = ({ checked, label, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.IconWrapper checked={checked}>
        {checked ? (
          <IoMdRadioButtonOn size={20} />
        ) : (
          <IoMdRadioButtonOff size={20} />
        )}
      </S.IconWrapper>
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  );
};
