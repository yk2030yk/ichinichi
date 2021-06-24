import { IDiaryUseCase } from '@/useCase/interfaces/useCases/diary';
import { IDateUseCase } from '@/useCase/interfaces/useCases/date';
import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';
import { ISettingUseCase } from '@/useCase/interfaces/useCases/setting';
import { IThemeUseCase } from '@/useCase/interfaces/useCases/theme';
import { IObjectiveUseCase } from '@/useCase/interfaces/useCases/objective';

export type Dependency = {
  diaryUseCase: IDiaryUseCase;
  dateUseCase: IDateUseCase;
  routeUseCase: IRouteUseCase;
  settingUseCase: ISettingUseCase;
  themeUseCase: IThemeUseCase;
  objectiveUseCase: IObjectiveUseCase;
};
