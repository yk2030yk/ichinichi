import { Setting } from '@/useCase/viewModels/setting';

export interface ISettingUseCase {
  findSetting: () => Promise<Setting>;

  updateSetting: (setting: Setting) => void;
}
