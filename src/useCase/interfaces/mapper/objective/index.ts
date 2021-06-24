import { LargeObjectiveDomain } from '@/domain/domainModels/objective';
import { LargeObjective } from '@/useCase/viewModels/objective';
import { Mapper } from '../mapper';

export type IObjectiveUseCaseMapper = Mapper<
  LargeObjective,
  LargeObjectiveDomain
>;
