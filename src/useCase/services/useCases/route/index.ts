import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';

export class RouteUseCase implements IRouteUseCase {
  getHomePath() {
    return '/';
  }

  getMboHomePath() {
    return '/mbo';
  }

  getManageDiaryTagPath() {
    return '/diary/manage/tag';
  }
}
