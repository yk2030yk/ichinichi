import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { HomePage } from '@/presenter/diary/pages/home';
import { DiaryPage } from '@/presenter/diary/pages/diary';
import { ObjectivePage } from '@/presenter/objective/pages/objective';
import { SettingPage } from '@/presenter/setting/pages/setting';

export const Routes: React.FC = () => {
  const routeUseCase = useRouteUseCase();
  return (
    <Switch>
      <Route path={routeUseCase.getDiaryPath()} component={DiaryPage} />
      <Route path={routeUseCase.getObjectivePath()} component={ObjectivePage} />
      <Route path={routeUseCase.getSettingPath()} component={SettingPage} />
      <Route path={routeUseCase.getHomePath()} component={HomePage} />
    </Switch>
  );
};
