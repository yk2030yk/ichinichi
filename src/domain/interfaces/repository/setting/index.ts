import { SettingDomain } from '@/domain/domainModels/setting';

export interface ISettingRepository {
  findSetting: () => Promise<SettingDomain>;

  updateSetting: (setting: SettingDomain) => void;
}
