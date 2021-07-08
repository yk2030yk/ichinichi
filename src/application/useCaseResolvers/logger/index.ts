import { LoggerUseCase } from '@/useCase/services/useCases/logger';

export class LoggerUseCaseResolver {
  resolve() {
    return new LoggerUseCase();
  }
}
