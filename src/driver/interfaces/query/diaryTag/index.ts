import { DiaryTagDataModel } from '@/driver/models/diary';

export interface IDiaryTagDataModelQuery {
  findDiaryTagsQuery: () => any;
  deleteDiaryTag: (dataModel: DiaryTagDataModel) => any;
}
