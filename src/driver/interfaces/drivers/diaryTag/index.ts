import { DiaryTagDataModel } from '@/driver/models/diary';

export interface IDiaryTagDriver {
  findDiaryTags: () => Promise<DiaryTagDataModel[]>;

  insertDiaryTag: (data: DiaryTagDataModel) => void;

  deleteDiaryTag: (data: DiaryTagDataModel) => void;
}
