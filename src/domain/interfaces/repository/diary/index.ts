import { DiaryEntryDomain } from '@/domain/domainModels/diary';

export interface IDiaryRepository {
  findDiaryByYear: (
    userId: string,
    year: number
  ) => Promise<DiaryEntryDomain[]>;

  updateDiaryEntry: (diaryEntry: DiaryEntryDomain) => Promise<DiaryEntryDomain>;
}
