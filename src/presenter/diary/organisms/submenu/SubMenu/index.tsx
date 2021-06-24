import React from 'react';

import { useOpenDiaryTagSettingModal } from '@/presenter/diary/hooks/diaryTag/modal';
import { MonthList } from '../../../molecules/submenu/MonthList';
import * as S from './styled';

const Links = () => {
  const open = useOpenDiaryTagSettingModal();
  return (
    <button type="button" onClick={open}>
      タグを設定
    </button>
  );
};

export const SubMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <MonthList />
      <Links />
    </S.Wrapper>
  );
};
