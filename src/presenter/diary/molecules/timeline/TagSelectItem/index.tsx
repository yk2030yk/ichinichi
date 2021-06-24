import React from 'react';

import { DiaryTagLabel } from '@/presenter/diary/atoms/diaryTag/DiaryTagLabel';
import { AiOutlineCheck } from 'react-icons/ai';
import { DiaryTag } from '@/useCase/viewModels/diary';
import * as S from './styled';

type Props = {
  diaryTag: DiaryTag;
  selected: boolean;
  addTag: (tag: DiaryTag) => void;
  removeTag: (tag: DiaryTag) => void;
};

export const TagSelectItem: React.FC<Props> = ({
  diaryTag,
  selected,
  addTag,
  removeTag,
}) => {
  const onClick = () => {
    if (selected) removeTag(diaryTag);
    else addTag(diaryTag);
  };

  return (
    <S.SelectItem onClick={onClick}>
      <S.CheckIconWrapper>
        {selected && <AiOutlineCheck size={15} />}
      </S.CheckIconWrapper>
      <S.TagWrapper>
        <DiaryTagLabel color={diaryTag.color}>{diaryTag.label}</DiaryTagLabel>
      </S.TagWrapper>
    </S.SelectItem>
  );
};
