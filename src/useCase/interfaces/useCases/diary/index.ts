import { DiaryEntry, DiaryTag } from '@/useCase/viewModels/diary';

export interface IDiaryUseCase {
  findDiaryByYear: (userId: string, year: number) => Promise<DiaryEntry[]>;

  updateDiaryEntry: (
    userId: string,
    date: string,
    content: string,
    tags: DiaryTag[]
  ) => Promise<DiaryEntry>;

  findDiaryEntryFromDiaryByDate(diary: DiaryEntry[], date: string): DiaryEntry;
}
