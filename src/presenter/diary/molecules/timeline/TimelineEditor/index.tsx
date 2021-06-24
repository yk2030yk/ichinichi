import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { DiaryTag } from '@/useCase/viewModels/diary';
import { diaryEntrySelector } from '../../../state/diary';
import { TimelineEditor_Content } from '../TimelineEditor_Content';
import { TimelineEditor_Tag } from '../TimelineEditor_Tag';
import { TimelineEditor_Actions } from '../TimelineEditor_Actions';
import * as S from './styled';

type Props = {
  date: string;
  closeEdit: () => void;
};

const useContent = (date: string) => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<DiaryTag[]>([]);
  const diaryEntry = useRecoilValue(diaryEntrySelector(date));

  useEffect(() => {
    if (diaryEntry) {
      setContent(diaryEntry.content);
      setTags(diaryEntry.tags);
    }
  }, [diaryEntry]);

  return {
    content,
    setContent,
    tags,
    setTags,
  };
};

export const TimelineEditor: React.FC<Props> = ({ date, closeEdit }) => {
  const { content, setContent, tags, setTags } = useContent(date);

  return (
    <S.TimelineEditor>
      <S.TimelineEditorItem>
        <TimelineEditor_Tag tags={tags} setTags={setTags} />
      </S.TimelineEditorItem>
      <S.TimelineEditorItem>
        <TimelineEditor_Content content={content} setContent={setContent} />
      </S.TimelineEditorItem>
      <S.TimelineEditorItem>
        <TimelineEditor_Actions
          date={date}
          tags={tags}
          content={content}
          closeEdit={closeEdit}
        />
      </S.TimelineEditorItem>
    </S.TimelineEditor>
  );
};
