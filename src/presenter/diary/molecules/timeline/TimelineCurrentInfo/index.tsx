import React from 'react';
import { useRecoilValue } from 'recoil';

import { diaryEntrySelector } from '../../../state/diary';
import { DiaryTagList } from '../../../atoms/diaryTag/DiaryTagList';
import * as S from './styled';

type Props = {
  date: string;
  openEdit: () => void;
};

export const TimelineCurrentInfo: React.FC<Props> = ({ date, openEdit }) => {
  const diaryEntry = useRecoilValue(diaryEntrySelector(date));

  return (
    <S.CurrentInfo>
      <S.TagContent>
        <DiaryTagList tags={diaryEntry.tags} />
      </S.TagContent>
      <S.ContentTextWrapper>
        <S.ContentText onClick={openEdit}>
          {diaryEntry.content || '未入力'}
        </S.ContentText>
      </S.ContentTextWrapper>
    </S.CurrentInfo>
  );
};
