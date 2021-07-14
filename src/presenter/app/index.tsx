import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Routes } from './routes';
import { GlobalComponents } from './globalComponents';
import { ApplicationThemeProvider } from './theme';

export const App = () => {
  return (
    <RecoilRoot>
      <ApplicationThemeProvider>
        <Router>
          <Routes />
          <GlobalComponents />
        </Router>
      </ApplicationThemeProvider>
    </RecoilRoot>
  );
};
