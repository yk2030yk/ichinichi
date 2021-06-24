import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { OpenWindow64 } from '@/presenter/objective/organisms/openWIndow/OpenWindow64';
import * as S from './styled';

export const MboHomeLayout: React.FC = () => {
  return (
    <GlobalLayout
      subMenuContent={<p />}
      mainContent={
        <S.Wrapper>
          <OpenWindow64 />
        </S.Wrapper>
      }
    />
  );
};
