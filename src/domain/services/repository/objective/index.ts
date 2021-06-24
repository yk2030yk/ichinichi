import { IObjectiveDomainMapper } from '@/domain/interfaces/mapper/objective';
import { IObjectiveQuery } from '@/domain/interfaces/query/objective';
import { IObjectiveRepository } from '@/domain/interfaces/repository/objective';
import { LargeObjectiveDomain } from '@/domain/domainModels/objective';
import { IObjectiveDriver } from '@/driver/interfaces/drivers/objective';

export class ObjectiveRepository implements IObjectiveRepository {
  constructor(
    private objectiveDriver: IObjectiveDriver,
    private objectiveMapper: IObjectiveDomainMapper,
    private objectiveQuery: IObjectiveQuery
  ) {}

  async findObjective() {
    const query = this.objectiveQuery.findObjectiveQuery();
    const result = await this.objectiveDriver.findObjective(query);
    const domainModel = this.objectiveMapper.toDomainModel(result);
    return domainModel;
  }

  updatedObjective(objective: LargeObjectiveDomain) {
    const query = this.objectiveQuery.updateObjectiveQuery();
    const dataModel = this.objectiveMapper.toDataModel(objective);
    this.objectiveDriver.updatedObjective(query, dataModel);
  }
}
