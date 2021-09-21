import React from 'react';

import * as S from './styled';

type Props = {
  id: number;
};

export const ObjectiveEditor: React.FC<Props> = ({ id }) => {
  return (
    <S.Wrapper>
      <div className="bg-gray-500 p-5 text-center">Tailwind</div>
      <S.Text rows={3} />
    </S.Wrapper>
  );
};
