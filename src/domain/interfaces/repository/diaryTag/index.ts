import { DiaryTagDomain } from '@/domain/domainModels/diary';

export interface IDiaryTagRepository {
  findDiaryTags: () => Promise<DiaryTagDomain[]>;

  insertDiaryTag: (diaryTag: DiaryTagDomain) => void;

  deleteDiaryTag: (diaryTag: DiaryTagDomain) => void;
}
