import { SettingUseCaseResolver } from '@/application/useCaseResolvers';
import { ISettingUseCase } from '@/useCase/interfaces/useCases/setting';
import { createUseCaseState } from '../useCaseAtom';

export const { selector: settingUseCaseSelector } = createUseCaseState<
  ISettingUseCase
>('setting', new SettingUseCaseResolver());
