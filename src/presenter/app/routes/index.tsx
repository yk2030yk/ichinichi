import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { DiaryPage } from '@/presenter/diary/pages/diary';
import { MboHomePage } from '@/presenter/objective/pages/MboHomePage';

export const Routes: React.FC = () => {
  const routeUseCase = useRouteUseCase();
  return (
    <Switch>
      <Route path={routeUseCase.getObjectivePath()} component={MboHomePage} />
      <Route path={routeUseCase.getHomePath()} component={DiaryPage} />
    </Switch>
  );
};
