import { RouteUseCase } from '@/useCase/services/useCases/route';

export class RouteUseCaseResolver {
  resolve() {
    return new RouteUseCase();
  }
}
