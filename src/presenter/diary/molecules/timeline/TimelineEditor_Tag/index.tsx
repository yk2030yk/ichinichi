import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { diaryTagsAtom } from '@/presenter/diary/state/diaryTag';
import { Popup } from '@/presenter/core/ui/Popup';
import { DiaryTagList } from '@/presenter/diary/atoms/diaryTag/DiaryTagList';
import { DiaryTag } from '@/useCase/viewModels/diary';
import { TagSelectItem } from '../TagSelectItem';
import * as S from './styled';

type Props = {
  tags: DiaryTag[];
  setTags: Dispatch<SetStateAction<DiaryTag[]>>;
};

export const TimelineEditor_Tag: React.FC<Props> = ({ tags, setTags }) => {
  const diaryTags = useRecoilValue(diaryTagsAtom);

  const addTag = (tag: DiaryTag) => setTags((pre) => [...pre, tag]);

  const removeTag = (tag: DiaryTag) =>
    setTags((pre) => pre.filter((v) => v.label !== tag.label));

  const selected = (tag: DiaryTag) =>
    Boolean(tags.find((t) => t.label === tag.label));

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <S.TagLayoutWrapper onClick={open}>
        <DiaryTagList tags={tags} />
      </S.TagLayoutWrapper>
      <Popup isOpen={isOpen} close={close}>
        <S.Wrapper>
          {diaryTags.map((d) => (
            <TagSelectItem
              key={d.label}
              diaryTag={d}
              selected={selected(d)}
              addTag={addTag}
              removeTag={removeTag}
            />
          ))}
        </S.Wrapper>
      </Popup>
    </div>
  );
};
