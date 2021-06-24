import { DateRepository } from '@/domain/services/repository/date';
import { DateUseCase } from '@/useCase/services/useCases/date';

export class DateUseCaseResolver {
  resolve() {
    return new DateUseCase(new DateRepository());
  }
}
