import React from 'react';
import { useHistory } from 'react-router-dom';

import { CalendarIcon } from '@/presenter/core/atoms/icons';
import { SideMenuCell } from '@/presenter/global/atoms/sidemenu/SideMenuCell';
import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { useIsCurrentPath } from '@/presenter/global/hooks/router';

export const Diary: React.FC = () => {
  const routeUseCase = useRouteUseCase();
  const history = useHistory();
  const path = routeUseCase.getDiaryPath();
  const selected = useIsCurrentPath(path);

  const onClick = () => history.push(path);

  return (
    <SideMenuCell onClick={onClick} selected={selected}>
      <CalendarIcon size={20} />
    </SideMenuCell>
  );
};
