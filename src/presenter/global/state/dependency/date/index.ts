import { DateUseCaseResolver } from '@/application/useCaseResolvers';
import { IDateUseCase } from '@/useCase/interfaces/useCases/date';
import { createUseCaseState } from '../useCaseAtom';

export const { selector: dateUseCaseSelector } = createUseCaseState<
  IDateUseCase
>('date', new DateUseCaseResolver());
