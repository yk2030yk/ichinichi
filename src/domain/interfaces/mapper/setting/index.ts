import { SettingDomain } from '@/domain/domainModels/setting';
import { SettingDataModel } from '@/driver/models/setting';
import { Mapper } from '../mapper';

export type ISettingDomainMapper = Mapper<SettingDomain, SettingDataModel>;
