import { ISettingRepository } from '@/domain/interfaces/repository/setting';
import { ISettingUseCase } from '@/useCase/interfaces/useCases/setting';
import { ISettingUseCaseMapper } from '@/useCase/interfaces/mapper/setting';
import { Setting } from '@/useCase/viewModels/setting';

export class SettingUseCase implements ISettingUseCase {
  constructor(
    private settingRepository: ISettingRepository,
    private settingUseCaseMapper: ISettingUseCaseMapper
  ) {}

  async findSetting() {
    const domainModel = await this.settingRepository.findSetting();
    return this.settingUseCaseMapper.toViewModel(domainModel);
  }

  async updateSetting(setting: Setting) {
    const domainModel = this.settingUseCaseMapper.toViewModel(setting);
    await this.settingRepository.updateSetting(domainModel);
  }
}
