import React from 'react';

import { Cell_Setting } from '@/presenter/global/molecules/sidemenu/Cell_Setting';
import { Cell_MboLink } from '@/presenter/global/molecules/sidemenu/Cell_MboLink';
import { Cell_DiaryLink } from '@/presenter/global/molecules/sidemenu/Cell_DiaryLink';
import * as S from './styled';

export const GlobalSideMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.MenuItem>
        <Cell_DiaryLink />
      </S.MenuItem>
      <S.MenuItem>
        <Cell_MboLink />
      </S.MenuItem>
      <S.MenuItem>
        <Cell_Setting />
      </S.MenuItem>
    </S.Wrapper>
  );
};
