import { SettingUseCaseResolver } from '@/application/useCaseResolvers';
import { ISettingUseCase } from '@/useCase/interfaces/useCases/setting';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: settingUseCaseAtom,
  selector: settingUseCaseSelector,
} = createUseCaseState<ISettingUseCase>(
  'setting',
  new SettingUseCaseResolver()
);
