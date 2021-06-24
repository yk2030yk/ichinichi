import { IDataBase } from '@/driver/interfaces/db';
import { IObjectiveDriver } from '@/driver/interfaces/drivers/objective';
import { LargeObjectiveDataModel } from '@/driver/models/objective';

export class ObjectiveDriver implements IObjectiveDriver {
  constructor(private db: IDataBase) {}

  async findObjective(query: any) {
    return this.db.findOne<LargeObjectiveDataModel>(query);
  }

  async updatedObjective(query: any, data: LargeObjectiveDataModel) {
    await this.db.update(query, data);
    return data;
  }
}
