import React from 'react';

import * as S from './styled';

type Props = {
  color: string;
  colors: string[];
  onChange: (color: string) => void;
};

export const ColorPicker: React.FC<Props> = ({ color, colors, onChange }) => {
  return (
    <S.ColorPicker>
      {colors.map((c) => (
        <S.ColorItem color={c} key={c} onClick={() => onChange(c)} />
      ))}
    </S.ColorPicker>
  );
};
