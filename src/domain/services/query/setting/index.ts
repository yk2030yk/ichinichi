import { ISettingQuery } from '@/domain/interfaces/query/setting';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';

export class SettingQuery implements ISettingQuery {
  findSettingQuery() {
    return {
      key: DataModelKey.Setting,
    };
  }

  updateSettingQuery() {
    return {
      key: DataModelKey.Setting,
    };
  }
}
