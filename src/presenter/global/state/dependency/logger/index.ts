import { LoggerUseCaseResolver } from '@/application/useCaseResolvers/logger';
import { ILoggerUseCase } from '@/useCase/interfaces/useCases/logger';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: loggerUseCaseAtom,
  selector: loggerUseCaseSelector,
} = createUseCaseState<ILoggerUseCase>('logger', new LoggerUseCaseResolver());
