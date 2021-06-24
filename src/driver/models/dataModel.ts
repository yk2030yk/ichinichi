import { DataModelKeys } from '../constants/nedb/dataModelKey';

export type DataModel<key extends keyof DataModelKeys, Data> = {
  key: DataModelKeys[key];
  data: Data;
};
