import { IApplicationDependencyResolver } from './interface';
import { UseCaseResolvers } from '../useCaseResolvers/resolvers';

export class DependencyResolver implements IApplicationDependencyResolver {
  constructor(private resolvers: UseCaseResolvers) {}

  public resolve() {
    return {
      diaryUseCase: this.resolvers.diaryUseCaseResolver.resolve(),
      dateUseCase: this.resolvers.dateUseCaseResolver.resolve(),
      objectiveUseCase: this.resolvers.objectiveUseCaseResolver.resolve(),
      routeUseCase: this.resolvers.routeUseCaseResolver.resolve(),
      settingUseCase: this.resolvers.settingUseCaseResolver.resolve(),
      themeUseCase: this.resolvers.themeUseCaseResolver.resolve(),
    };
  }
}
