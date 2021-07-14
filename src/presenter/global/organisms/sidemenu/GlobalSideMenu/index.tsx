import React from 'react';

import { Cell_MboLink } from '@/presenter/global/molecules/sidemenu/Cell_MboLink';
import { Cell_DiaryLink } from '@/presenter/global/molecules/sidemenu/Cell_DiaryLink';
import { Cell_HomeLink } from '@/presenter/global/molecules/sidemenu/Cell_HomeLink';
import { Cell_SettingLink } from '@/presenter/global/molecules/sidemenu/Cell_SettingLink';
import * as S from './styled';

export const GlobalSideMenu: React.FC = () => {
  const items = [
    { key: 'home', component: <Cell_HomeLink /> },
    { key: 'diary', component: <Cell_DiaryLink /> },
    { key: 'mbo', component: <Cell_MboLink /> },
    { key: 'setting', component: <Cell_SettingLink /> },
  ];

  return (
    <S.Wrapper>
      {items.map((item) => (
        <S.MenuItem key={item.key}>{item.component}</S.MenuItem>
      ))}
    </S.Wrapper>
  );
};
