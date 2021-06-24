import React from 'react';

import { DiaryTagList } from '@/presenter/diary/atoms/diaryTag/DiaryTagList';
import { Popup } from '@/presenter/core/ui/Popup';
import { DiaryEntry } from '@/useCase/viewModels/diary';
import * as S from './styled';

type Props = {
  diaryEntry: DiaryEntry;
  isOpen: boolean;
  close: () => void;
};

export const Tooltip: React.FC<Props> = ({ diaryEntry, isOpen, close }) => {
  return (
    <Popup isOpen={isOpen} close={close}>
      <S.TooltipWrapper>
        <S.TooltipDate>{diaryEntry.date}</S.TooltipDate>
        <S.TagContent>
          <DiaryTagList tags={diaryEntry.tags} />
        </S.TagContent>
        <S.TooltipContent>{diaryEntry.content}</S.TooltipContent>
      </S.TooltipWrapper>
    </Popup>
  );
};
