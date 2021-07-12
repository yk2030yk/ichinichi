import { IDataBase } from '@/driver/interfaces/db';
import { IDiaryTagDriver } from '@/driver/interfaces/drivers/diaryTag';
import { IDiaryTagDataModelQuery } from '@/driver/interfaces/query/diaryTag';
import { DiaryTagDataModel } from '@/driver/models/diary';

export class DiaryTagDriver implements IDiaryTagDriver {
  constructor(
    private db: IDataBase,
    private dataModelQuery: IDiaryTagDataModelQuery
  ) {}

  async findDiaryTags() {
    const query = this.dataModelQuery.findDiaryTagsQuery();
    const diaryTags = this.db.find<DiaryTagDataModel>(query);
    return diaryTags;
  }

  async insertDiaryTag(data: DiaryTagDataModel) {
    this.db.insert(data);
  }

  async deleteDiaryTag(dataModel: DiaryTagDataModel) {
    const query = this.dataModelQuery.deleteDiaryTag(dataModel);
    this.db.remove(query);
  }
}
