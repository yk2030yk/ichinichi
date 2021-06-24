import { DiaryEntryDomain } from '@/domain/domainModels/diary';
import { IDiaryRepository } from '@/domain/interfaces/repository/diary';
import { IDiaryDriver } from '@/driver/interfaces/drivers/diary';
import { IDiaryEntryDomainMapper } from '@/domain/interfaces/mapper/diary';
import { IDiaryEntryQuery } from '@/domain/interfaces/query/diary';

export class DiaryRepository implements IDiaryRepository {
  constructor(
    private diaryDriver: IDiaryDriver,
    private diaryEntryMapper: IDiaryEntryDomainMapper,
    private diaryEntryQuery: IDiaryEntryQuery
  ) {}

  async findDiaryByYear(userId: string, year: number) {
    const query = this.diaryEntryQuery.findDiaryByYearQuery(userId, year);
    const data = await this.diaryDriver.findDiary(query);
    return data.map(this.diaryEntryMapper.toDomainModel);
  }

  async updateDiaryEntry(diaryEntry: DiaryEntryDomain) {
    const query = this.diaryEntryQuery.updateDiaryEntryQuery(
      diaryEntry.userId,
      diaryEntry.date
    );
    const dataModel = this.diaryEntryMapper.toDataModel(diaryEntry);
    const result = await this.diaryDriver.updateDiary(query, dataModel);

    return this.diaryEntryMapper.toDomainModel(result);
  }
}
