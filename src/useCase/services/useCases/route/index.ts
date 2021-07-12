import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';

export class RouteUseCase implements IRouteUseCase {
  getHomePath() {
    return '/';
  }

  getObjectivePath() {
    return '/objective';
  }
}
