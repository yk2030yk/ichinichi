import { ISettingDomainMapper } from '@/domain/interfaces/mapper/setting';
import { SettingDomain } from '@/domain/domainModels/setting';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';
import { SettingDataModel } from '@/driver/models/setting';
import { isNullOrUndefined } from '@/core/utils/is';
import { exceptionThrower } from '../../exceptionThrower';

export class SettingDomainMapper implements ISettingDomainMapper {
  getDefaultDomainModel(): SettingDomain {
    return { slackWebhookUrl: '' };
  }

  getDefaultDataModel(): SettingDataModel {
    return {
      key: DataModelKey.Setting,
      data: {
        slackWebhookUrl: '',
      },
    };
  }

  toDomainModel(dataModel: SettingDataModel): SettingDomain {
    if (isNullOrUndefined(dataModel)) {
      return this.getDefaultDomainModel();
    }

    return dataModel.data;
  }

  toDataModel(domainModel: SettingDomain): SettingDataModel {
    if (isNullOrUndefined(domainModel)) {
      exceptionThrower.throwMapperException();
    }

    return {
      key: DataModelKey.Setting,
      data: domainModel,
    };
  }
}
