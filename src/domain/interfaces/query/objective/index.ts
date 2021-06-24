import { DataModelKeys } from '@/driver/constants/nedb/dataModelKey';

export interface IObjectiveQuery {
  findObjectiveQuery: () => {
    key: DataModelKeys['Objective'];
  };

  updateObjectiveQuery: () => {
    key: DataModelKeys['Objective'];
  };
}
