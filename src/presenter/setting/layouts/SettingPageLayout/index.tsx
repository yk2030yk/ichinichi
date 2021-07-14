import React from 'react';

import { GlobalLayout } from '@/presenter/global/layouts/GlobalLayout';
import { SettingForm } from '../../organisms/form/SettingForm';
import * as S from './styled';

export const SettingPageLayout: React.FC = () => {
  return (
    <GlobalLayout
      mainContent={
        <S.ContentWrapper>
          <SettingForm />
        </S.ContentWrapper>
      }
    />
  );
};
