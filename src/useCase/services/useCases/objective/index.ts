import { IObjectiveUseCase } from '@/useCase/interfaces/useCases/objective';
import { IObjectiveRepository } from '@/domain/interfaces/repository/objective';
import { IObjectiveUseCaseMapper } from '@/useCase/interfaces/mapper/objective';
import { LargeObjective } from '@/useCase/viewModels/objective';

export class ObjectiveUseCase implements IObjectiveUseCase {
  constructor(
    private objectiveRepository: IObjectiveRepository,
    private objectiveUseCaseMapper: IObjectiveUseCaseMapper
  ) {}

  async findObjective() {
    const domainModel = await this.objectiveRepository.findObjective();
    return this.objectiveUseCaseMapper.toViewModel(domainModel);
  }

  async updateObjective(objective: LargeObjective) {
    const domainModel = this.objectiveUseCaseMapper.toDomainModel(objective);
    this.objectiveRepository.updatedObjective(domainModel);
  }
}
