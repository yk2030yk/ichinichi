import { ObjectiveUseCaseResolver } from '@/application/useCaseResolvers';
import { IObjectiveUseCase } from '@/useCase/interfaces/useCases/objective';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: objectiveUseCaseAtom,
  selector: objectiveUseCaseSelector,
} = createUseCaseState<IObjectiveUseCase>(
  'objective',
  new ObjectiveUseCaseResolver()
);
