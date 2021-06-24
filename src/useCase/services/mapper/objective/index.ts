import { LargeObjectiveDomain } from '@/domain/domainModels/objective';
import { LargeObjective } from '@/useCase/viewModels/objective';
import { IObjectiveUseCaseMapper } from '@/useCase/interfaces/mapper/objective';
import { isNullOrUndefined } from '@/core/utils/value';

export class ObjectiveUseCaseMapper implements IObjectiveUseCaseMapper {
  getDefaultViewModel(): LargeObjective {
    return {
      id: 0,
      label: '',
      objectives: [],
    };
  }

  toViewModel(domainModel: LargeObjectiveDomain): LargeObjective {
    if (isNullOrUndefined(domainModel)) {
      return this.getDefaultViewModel();
    }
    return { ...domainModel };
  }

  toDomainModel(viewModel: LargeObjective): LargeObjectiveDomain {
    return { ...viewModel };
  }
}
