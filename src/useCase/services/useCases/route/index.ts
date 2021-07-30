import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';

export class RouteUseCase implements IRouteUseCase {
  getHomePath() {
    return '/';
  }

  getDiaryPath() {
    return '/diary';
  }

  getSettingPath() {
    return '/setting';
  }
}
