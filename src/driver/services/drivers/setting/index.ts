import { IDataBase } from '@/driver/interfaces/db';
import { ISettingDriver } from '@/driver/interfaces/drivers/setting';
import { SettingDataModel } from '@/driver/models/setting';

export class SettingDriver implements ISettingDriver {
  constructor(private db: IDataBase) {}

  async findSetting(query: any) {
    return this.db.findOne<SettingDataModel>(query);
  }

  async updateSetting(query: any, data: SettingDataModel) {
    await this.db.update(query, data);
  }
}
