import { LargeObjectiveDomain } from '@/domain/domainModels/objective';

export interface IObjectiveRepository {
  findObjective: () => Promise<LargeObjectiveDomain>;

  updatedObjective: (objective: LargeObjectiveDomain) => void;
}
