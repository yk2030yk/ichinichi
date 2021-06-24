import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { diaryEntrySelector } from '@/presenter/diary/state/diary';
import { userIdAtom } from '@/presenter/global/state/auth';
import { useDiaryUseCase } from '@/presenter/global/hooks/dependency';
import { DiaryTag } from '@/useCase/viewModels/diary';
import * as S from './styled';

type Props = {
  content: string;
  tags: DiaryTag[];
  date: string;
  closeEdit: () => void;
};

export const TimelineEditor_Actions: React.FC<Props> = ({
  date,
  content,
  tags,
  closeEdit,
}) => {
  const setDiaryEntry = useSetRecoilState(diaryEntrySelector(date));

  const diaryUseCase = useDiaryUseCase();
  const userId = useRecoilValue(userIdAtom);

  const saveDiaryEntry = async () => {
    const data = await diaryUseCase.updateDiaryEntry(
      userId,
      date,
      content,
      tags
    );
    setDiaryEntry(data);
  };

  const onClickSaveButton = () => {
    saveDiaryEntry();
    closeEdit();
  };

  const onClickCancelButton = () => {
    closeEdit();
  };

  return (
    <S.EditActions>
      <S.EditAction>
        <S.SaveButton onClick={onClickSaveButton}>保存する</S.SaveButton>
      </S.EditAction>
      <S.EditAction>
        <S.CancelButton onClick={onClickCancelButton}>
          キャンセル
        </S.CancelButton>
      </S.EditAction>
    </S.EditActions>
  );
};
