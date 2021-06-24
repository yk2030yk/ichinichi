import { DiaryEntryDataModel } from '@/driver/models/diary';

export interface IDiaryDriver {
  findDiary: (query: any) => Promise<DiaryEntryDataModel[]>;

  updateDiary: (
    query: any,
    data: DiaryEntryDataModel
  ) => Promise<DiaryEntryDataModel>;
}
