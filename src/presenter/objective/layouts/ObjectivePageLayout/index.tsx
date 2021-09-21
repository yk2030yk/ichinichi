import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { ObjectiveList } from '../../organisms/objective/ObjectiveList';
import * as S from './styled';

export const ObjectivePageLayout: React.FC = () => {
  return (
    <GlobalLayout
      mainContent={
        <S.ContentWrapper>
          <ObjectiveList />
        </S.ContentWrapper>
      }
    />
  );
};
