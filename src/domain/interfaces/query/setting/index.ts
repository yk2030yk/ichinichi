import { DataModelKeys } from '@/driver/constants/nedb/dataModelKey';

export interface ISettingQuery {
  findSettingQuery: () => {
    key: DataModelKeys['Setting'];
  };

  updateSettingQuery: () => {
    key: DataModelKeys['Setting'];
  };
}
