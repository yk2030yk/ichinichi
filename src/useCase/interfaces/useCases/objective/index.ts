import { LargeObjective } from '@/useCase/viewModels/objective';

export interface IObjectiveUseCase {
  findObjective: () => Promise<LargeObjective>;

  updateObjective: (objective: LargeObjective) => void;
}
