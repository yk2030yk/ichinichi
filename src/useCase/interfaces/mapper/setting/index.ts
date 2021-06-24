import { SettingDomain } from '@/domain/domainModels/setting';
import { Setting } from '@/useCase/viewModels/setting';
import { Mapper } from '../mapper';

export type ISettingUseCaseMapper = Mapper<Setting, SettingDomain>;
