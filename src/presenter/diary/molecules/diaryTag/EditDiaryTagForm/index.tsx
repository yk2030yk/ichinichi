import React from 'react';
import { GithubPicker, ColorResult } from 'react-color';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import { useInsertDiaryTag } from '@/presenter/diary/hooks/diaryTag';
import {
  diaryTagColorAtom,
  diaryTagFormSelector,
  diaryTagLabelAtom,
  diaryTagsAtom,
} from '@/presenter/diary/state/diaryTag';
import { DiaryTagLabel } from '@/presenter/diary/atoms/diaryTag/DiaryTagLabel';
import { useTagColor } from '@/presenter/global/hooks/theme';
import * as S from './styled';

export const DiaryTagColorForm: React.FC = () => {
  const [color, setColor] = useRecoilState(diaryTagColorAtom);
  const colors = useTagColor();

  const onChangeColor = (c: ColorResult) => setColor(c.hex);

  return (
    <GithubPicker
      color={color}
      colors={colors}
      triangle="hide"
      onChange={onChangeColor}
      onChangeComplete={onChangeColor}
    />
  );
};

export const DiaryTagLabelForm: React.FC = () => {
  const [label, setLabel] = useRecoilState(diaryTagLabelAtom);

  return (
    <S.Input
      type="text"
      value={label}
      placeholder="タグを入力してください"
      onChange={(e: any) => setLabel(e.target.value)}
    />
  );
};

export const DiaryTagPreview: React.FC = () => {
  const diaryTag = useRecoilValue(diaryTagFormSelector);
  return (
    <S.TagWrapper>
      <DiaryTagLabel color={diaryTag.color}>
        {diaryTag.label || '入力されていません。'}
      </DiaryTagLabel>
    </S.TagWrapper>
  );
};

export const DiaryTagFormSubmit: React.FC = () => {
  const diaryTag = useRecoilValue(diaryTagFormSelector);
  const diaryTags = useRecoilValue(diaryTagsAtom);
  const resetLabel = useResetRecoilState(diaryTagLabelAtom);
  const resetColor = useResetRecoilState(diaryTagColorAtom);
  const insertTag = useInsertDiaryTag();

  const disabled =
    diaryTag.label === '' ||
    Boolean(diaryTags.find((d) => d.label === diaryTag.label));

  const onClick = () => {
    insertTag(diaryTag);
    resetLabel();
    resetColor();
  };

  return (
    <S.Button onClick={onClick} disabled={disabled}>
      追加する
    </S.Button>
  );
};

export const EditDiaryTagForm: React.FC = () => {
  return (
    <S.TagForm>
      <S.TagFormItem>
        <DiaryTagLabelForm />
        <S.ButtonWrapper>
          <DiaryTagFormSubmit />
        </S.ButtonWrapper>
      </S.TagFormItem>
      <S.TagFormItem>
        <DiaryTagColorForm />
      </S.TagFormItem>
      <S.TagFormItem>
        <S.TagPreviewWrapper>
          <DiaryTagPreview />
        </S.TagPreviewWrapper>
      </S.TagFormItem>
    </S.TagForm>
  );
};
