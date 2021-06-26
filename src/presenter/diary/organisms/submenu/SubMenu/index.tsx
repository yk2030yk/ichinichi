import React from 'react';

import { MonthList } from '../../../molecules/submenu/MonthList';
import { SettingList } from '../../../molecules/submenu/SettingList';
import * as S from './styled';

export const SubMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <MonthList />
      <SettingList />
    </S.Wrapper>
  );
};
