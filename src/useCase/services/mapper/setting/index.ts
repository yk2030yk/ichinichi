import { Setting } from '@/useCase/viewModels/setting';
import { SettingDomain } from '@/domain/domainModels/setting';
import { ISettingUseCaseMapper } from '@/useCase/interfaces/mapper/setting';
import { isNullOrUndefined } from '@/core/utils/is';

export class SettingUseCaseMapper implements ISettingUseCaseMapper {
  getDefaultViewModel(): Setting {
    return {
      slackWebhookUrl: '',
    };
  }

  toViewModel(domainModel: SettingDomain): Setting {
    if (isNullOrUndefined(domainModel)) {
      return this.getDefaultViewModel();
    }
    return { ...domainModel };
  }

  toDomainModel(viewModel: Setting): SettingDomain {
    return { ...viewModel };
  }
}
