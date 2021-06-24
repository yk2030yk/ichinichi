import { ObjectiveDomainMapper } from '@/domain/services/mapper/objective';
import { ObjectiveQuery } from '@/domain/services/query/objective';
import { ObjectiveRepository } from '@/domain/services/repository/objective';
import { NeDataBase } from '@/driver/services/db/nedb';
import { ObjectiveDriver } from '@/driver/services/drivers/objective';
import { ObjectiveUseCaseMapper } from '@/useCase/services/mapper/objective';
import { ObjectiveUseCase } from '@/useCase/services/useCases/objective';

export class ObjectiveUseCaseResolver {
  resolve() {
    return new ObjectiveUseCase(
      new ObjectiveRepository(
        new ObjectiveDriver(new NeDataBase()),
        new ObjectiveDomainMapper(),
        new ObjectiveQuery()
      ),
      new ObjectiveUseCaseMapper()
    );
  }
}
