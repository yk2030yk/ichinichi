import { ISettingDriver } from '@/driver/interfaces/drivers/setting';
import { ISettingRepository } from '@/domain/interfaces/repository/setting';
import { ISettingDomainMapper } from '@/domain/interfaces/mapper/setting';
import { SettingDomain } from '@/domain/domainModels/setting';
import { ISettingQuery } from '@/domain/interfaces/query/setting';

export class SettingRepository implements ISettingRepository {
  constructor(
    private settingDriver: ISettingDriver,
    private settingMapper: ISettingDomainMapper,
    private settingQuery: ISettingQuery
  ) {}

  async findSetting() {
    const query = this.settingQuery.findSettingQuery();
    const result = await this.settingDriver.findSetting(query);
    const domainModel = this.settingMapper.toDomainModel(result);
    return domainModel;
  }

  async updateSetting(setting: SettingDomain) {
    const query = this.settingQuery.updateSettingQuery();
    const dataModel = this.settingMapper.toDataModel(setting);
    this.settingDriver.updateSetting(query, dataModel);
  }
}
