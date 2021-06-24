import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';
import { IDiaryTagDataModelQuery } from '@/driver/interfaces/query/diaryTag';
import { DiaryTagDataModel } from '@/driver/models/diary';

export class DiaryTagDataModelQuery implements IDiaryTagDataModelQuery {
  findDiaryTagsQuery() {
    return {
      key: DataModelKey.DiaryTag,
    };
  }

  deleteDiaryTag(dataModel: DiaryTagDataModel) {
    return {
      key: DataModelKey.DiaryTag,
      'data.label': dataModel.data.label,
    };
  }
}
