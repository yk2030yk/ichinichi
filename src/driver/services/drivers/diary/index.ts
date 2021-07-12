import { IDataBase } from '@/driver/interfaces/db';
import { IDiaryDriver } from '@/driver/interfaces/drivers/diary';
import { DiaryEntryDataModel } from '@/driver/models/diary';

export class DiaryDriver implements IDiaryDriver {
  constructor(private db: IDataBase) {}

  async findDiary(query: any) {
    const diary = await this.db.find<DiaryEntryDataModel>(query);
    return diary;
  }

  async updateDiary(query: any, data: DiaryEntryDataModel) {
    await this.db.update(query, data);
    return data;
  }
}
