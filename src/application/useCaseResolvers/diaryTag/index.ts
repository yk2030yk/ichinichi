import { DiaryTagDomainMapper } from '@/domain/services/mapper/diaryTag';
import { DiaryTagRepository } from '@/domain/services/repository/diaryTag';
import { DiaryTagDataModelQuery } from '@/driver/services/dataModelQuery/diaryTag';
import { NeDataBase } from '@/driver/services/db/nedb';
import { DiaryTagDriver } from '@/driver/services/drivers/diaryTag';
import { DiaryTagUseCaseMapper } from '@/useCase/services/mapper/diaryTag';
import { DiaryTagUseCase } from '@/useCase/services/useCases/diaryTag';

export class DiaryTagUseCaseResolver {
  resolve() {
    return new DiaryTagUseCase(
      new DiaryTagRepository(
        new DiaryTagDriver(new NeDataBase(), new DiaryTagDataModelQuery()),
        new DiaryTagDomainMapper()
      ),
      new DiaryTagUseCaseMapper()
    );
  }
}
