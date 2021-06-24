import { SettingDomainMapper } from '@/domain/services/mapper/setting';
import { SettingQuery } from '@/domain/services/query/setting';
import { SettingRepository } from '@/domain/services/repository/setting';
import { NeDataBase } from '@/driver/services/db/nedb';
import { SettingDriver } from '@/driver/services/drivers/setting';
import { SettingUseCaseMapper } from '@/useCase/services/mapper/setting';
import { SettingUseCase } from '@/useCase/services/useCases/setting';

export class SettingUseCaseResolver {
  resolve() {
    return new SettingUseCase(
      new SettingRepository(
        new SettingDriver(new NeDataBase()),
        new SettingDomainMapper(),
        new SettingQuery()
      ),
      new SettingUseCaseMapper()
    );
  }
}
