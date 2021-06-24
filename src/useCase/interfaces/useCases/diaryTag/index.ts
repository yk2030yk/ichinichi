import { DiaryTag } from '@/useCase/viewModels/diary';

export interface IDiaryTagUseCase {
  findDiaryTags: () => Promise<DiaryTag[]>;

  insertDiaryTag: (diaryTag: DiaryTag) => void;

  deleteDiaryTag: (diaryTag: DiaryTag) => void;
}
