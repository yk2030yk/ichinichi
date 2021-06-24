import React from 'react';
import {
  useDeleteDiaryTag,
  useDiaryTags,
} from '@/presenter/diary/hooks/diaryTag';

import { DiaryTagList } from '@/presenter/diary/atoms/diaryTag/DiaryTagList';
import { DiaryTag } from '@/useCase/viewModels/diary';
import { useOpenConfirmAlert } from '@/presenter/global/hooks/alert';
import * as S from './styled';

export const EditDiaryTagList: React.FC = () => {
  const diaryTags = useDiaryTags();
  const deleteTag = useDeleteDiaryTag();
  const openConfirmAlert = useOpenConfirmAlert();

  const onClickTag = (tag: DiaryTag) => {
    openConfirmAlert({
      message: (
        <div>
          <p>タグを削除してもよろしいですか？</p>
          <p>タグ: {tag.label}</p>
        </div>
      ),
      ok: () => deleteTag(tag),
    });
  };

  return (
    <S.TagListArea>
      <DiaryTagList tags={diaryTags} onClick={onClickTag} editable />
    </S.TagListArea>
  );
};
