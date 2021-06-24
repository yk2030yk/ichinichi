import { SettingDataModel } from '@/driver/models/setting';

export interface ISettingDriver {
  findSetting: (query: any) => Promise<SettingDataModel>;

  updateSetting: (query: any, data: SettingDataModel) => void;
}
