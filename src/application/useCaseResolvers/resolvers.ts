import { IDiaryUseCase } from '@/useCase/interfaces/useCases/diary';
import { IDateUseCase } from '@/useCase/interfaces/useCases/date';
import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';
import { ISettingUseCase } from '@/useCase/interfaces/useCases/setting';
import { IThemeUseCase } from '@/useCase/interfaces/useCases/theme';
import { IObjectiveUseCase } from '@/useCase/interfaces/useCases/objective';

export interface IUseCaseResolver<T> {
  resolve: () => T;
}

export type UseCaseResolvers = {
  dateUseCaseResolver: IUseCaseResolver<IDateUseCase>;
  diaryUseCaseResolver: IUseCaseResolver<IDiaryUseCase>;
  objectiveUseCaseResolver: IUseCaseResolver<IObjectiveUseCase>;
  routeUseCaseResolver: IUseCaseResolver<IRouteUseCase>;
  settingUseCaseResolver: IUseCaseResolver<ISettingUseCase>;
  themeUseCaseResolver: IUseCaseResolver<IThemeUseCase>;
};
