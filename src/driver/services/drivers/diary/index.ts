import { IDataBase } from '@/driver/interfaces/db';
import { IDiaryDriver } from '@/driver/interfaces/drivers/diary';
import { DiaryEntryDataModel } from '@/driver/models/diary';

export class DiaryDriver implements IDiaryDriver {
  constructor(private db: IDataBase) {}

  async findDiary(query: any) {
    return this.db.find<DiaryEntryDataModel>(query);
  }

  async updateDiary(query: any, data: DiaryEntryDataModel) {
    await this.db.update(query, data);
    return data;
  }
}
