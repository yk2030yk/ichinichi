import { useDiaryTagUseCase } from '@/presenter/global/hooks/dependency/diaryTag';
import { DiaryTag } from '@/useCase/viewModels/diary';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { diaryTagsAtom } from '../../state/diaryTag';

export const useDiaryTags = () => useRecoilValue(diaryTagsAtom);

export const useLoadDiaryTags = () => {
  const diaryTagUseCase = useDiaryTagUseCase();
  const setDiaryTags = useSetRecoilState(diaryTagsAtom);

  const load = async () => {
    const tags = await diaryTagUseCase.findDiaryTags();
    setDiaryTags(tags);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useInsertDiaryTag = () => {
  const diaryTagUseCase = useDiaryTagUseCase();
  const setDiaryTags = useSetRecoilState(diaryTagsAtom);

  return (diaryTag: DiaryTag) => {
    diaryTagUseCase.insertDiaryTag(diaryTag);
    setDiaryTags((pre) => [...pre, diaryTag]);
  };
};

export const useDeleteDiaryTag = () => {
  const diaryTagUseCase = useDiaryTagUseCase();
  const setDiaryTags = useSetRecoilState(diaryTagsAtom);

  return (diaryTag: DiaryTag) => {
    diaryTagUseCase.deleteDiaryTag(diaryTag);
    setDiaryTags((pre) => pre.filter((d) => d.label !== diaryTag.label));
  };
};
