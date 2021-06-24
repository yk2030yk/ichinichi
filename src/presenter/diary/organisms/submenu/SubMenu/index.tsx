import React from 'react';

import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { useHistory } from 'react-router-dom';
import { MonthList } from '../../../molecules/submenu/MonthList';
import * as S from './styled';

const Links = () => {
  const routeUseCase = useRouteUseCase();
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => history.push(routeUseCase.getManageDiaryTagPath())}
    >
      tag
    </button>
  );
};

export const SubMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <MonthList />
      <Links />
    </S.Wrapper>
  );
};
