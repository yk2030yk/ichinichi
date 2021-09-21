import React from 'react';

import { MenuItems } from '@/presenter/global/molecules/sidemenu/menuItems';

import * as S from './styled';

export const GlobalSideMenu: React.FC = () => {
  const items = [
    { key: 'home', component: <MenuItems.Home /> },
    { key: 'diary', component: <MenuItems.Diary /> },
    { key: 'objective', component: <MenuItems.Objective /> },
    { key: 'setting', component: <MenuItems.Setting /> },
  ];

  return (
    <S.Wrapper>
      {items.map((item) => (
        <S.MenuItem key={item.key}>{item.component}</S.MenuItem>
      ))}
    </S.Wrapper>
  );
};
