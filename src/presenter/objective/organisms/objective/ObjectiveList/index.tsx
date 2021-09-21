import React from 'react';

import { ObjectiveEditor } from '@/presenter/objective/molecules/objective/ObjectiveEditor';
import * as S from './styled';

export const ObjectiveList: React.FC = () => {
  const ids = [1, 2, 3];
  return (
    <S.Wrapper>
      {ids.map((id) => (
        <ObjectiveEditor key={id} id={id} />
      ))}
    </S.Wrapper>
  );
};
