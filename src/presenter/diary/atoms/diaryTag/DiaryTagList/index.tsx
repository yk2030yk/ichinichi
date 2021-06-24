import React from 'react';

import { DiaryTag } from '@/useCase/viewModels/diary';
import { DiaryTagLabel } from '../DiaryTagLabel';
import { DiaryTagLayout } from '../DiaryTagLayout';
import * as S from './styled';

type Props = {
  tags: DiaryTag[];
  onClick?: (tag: DiaryTag) => void;
  editable?: boolean;
  showEmptyMessage?: boolean;
};

export const DiaryTagList: React.FC<Props> = ({
  tags,
  onClick,
  editable = false,
  showEmptyMessage = false,
}) => {
  return (
    <DiaryTagLayout>
      {tags.map((tag) => (
        <S.TagWrapper key={tag.label}>
          <DiaryTagLabel
            color={tag.color}
            onClick={() => onClick && onClick(tag)}
            editable={editable}
          >
            {tag.label}
          </DiaryTagLabel>
        </S.TagWrapper>
      ))}
      {showEmptyMessage && tags.length === 0 && (
        <DiaryTagLabel>タグが設定されていません。</DiaryTagLabel>
      )}
    </DiaryTagLayout>
  );
};
