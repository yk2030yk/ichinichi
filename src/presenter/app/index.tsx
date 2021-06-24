import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { SettingModal } from '../setting/organisms/modal/SettingModal';
import { GlobalSnackbarHandler } from '../global/organisms/snackbar/GlobalSnackbarHandler';
import { ConfirmAlertHandler } from '../global/organisms/alert/ConfirmAlertHandler';
import { Routes } from './routes';
import { ApplicationThemeProvider } from './theme';

export const App = () => {
  return (
    <RecoilRoot>
      <ApplicationThemeProvider>
        <Router>
          <Routes />
          <SettingModal />
          <GlobalSnackbarHandler />
          <ConfirmAlertHandler />
        </Router>
      </ApplicationThemeProvider>
    </RecoilRoot>
  );
};
