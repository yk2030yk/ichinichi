import React from 'react';

import { useOpenDiaryTagSettingModal } from '@/presenter/diary/hooks/diaryTag/modal';
import * as S from './styled';

export const SettingList: React.FC = () => {
  const open = useOpenDiaryTagSettingModal();
  return (
    <S.Wrapper>
      <p>設定</p>
      <S.Link onClick={open}>タグを設定</S.Link>
    </S.Wrapper>
  );
};
