import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { ComponentName } from '@/presenter/diary/MemoListPage';
import { MboHomePage } from '@/presenter/objective/pages/MboHomePage';

export const Routes: React.FC = () => {
  const routeUseCase = useRouteUseCase();
  return (
    <Switch>
      <Route path={routeUseCase.getMboHomePath()} component={MboHomePage} />
      <Route path={routeUseCase.getHomePath()} component={ComponentName} />
    </Switch>
  );
};
