import { IObjectiveQuery } from '@/domain/interfaces/query/objective';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';

export class ObjectiveQuery implements IObjectiveQuery {
  findObjectiveQuery() {
    return {
      key: DataModelKey.Objective,
    };
  }

  updateObjectiveQuery() {
    return {
      key: DataModelKey.Objective,
    };
  }
}
