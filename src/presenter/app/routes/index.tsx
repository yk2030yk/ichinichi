import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useRouteUseCase } from '@/presenter/global/hooks/dependency';
import { HomePage } from '@/presenter/diary/pages/home';
import { DiaryPage } from '@/presenter/diary/pages/diary';
import { MboHomePage } from '@/presenter/objective/pages/MboHomePage';
import { SettingPage } from '@/presenter/setting/pages/setting';

export const Routes: React.FC = () => {
  const routeUseCase = useRouteUseCase();
  return (
    <Switch>
      <Route path={routeUseCase.getObjectivePath()} component={MboHomePage} />
      <Route path={routeUseCase.getDiaryPath()} component={DiaryPage} />
      <Route path={routeUseCase.getSettingPath()} component={SettingPage} />
      <Route path={routeUseCase.getHomePath()} component={HomePage} />
    </Switch>
  );
};
