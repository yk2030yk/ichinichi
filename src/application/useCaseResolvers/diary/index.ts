import { DiaryEntryDomainMapper } from '@/domain/services/mapper/diary';
import { DiaryEntryQuery } from '@/domain/services/query/diary';
import { DateRepository } from '@/domain/services/repository/date';
import { DiaryRepository } from '@/domain/services/repository/diary';
import { dataBase } from '@/driver/services/db/nedb/create';
import { DiaryDriver } from '@/driver/services/drivers/diary';
import { DiaryEntryUseCaseMapper } from '@/useCase/services/mapper/diary';
import { DiaryUseCase } from '@/useCase/services/useCases/diary';

export class DiaryUseCaseResolver {
  resolve() {
    return new DiaryUseCase(
      new DiaryRepository(
        new DiaryDriver(dataBase),
        new DiaryEntryDomainMapper(),
        new DiaryEntryQuery()
      ),
      new DiaryEntryUseCaseMapper(),
      new DateRepository()
    );
  }
}
