import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

import * as S from './styled';

type Props = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export const TimelineEditor_Content: React.FC<Props> = ({
  content,
  setContent,
}) => {
  return (
    <S.TextArea
      rows={6}
      placeholder="今日学んだことを書いてみよう！"
      value={content}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setContent(e.target.value)
      }
    />
  );
};
