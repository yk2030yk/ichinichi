import { DiaryTagDomain } from '@/domain/domainModels/diary';
import { IDiaryTagRepository } from '@/domain/interfaces/repository/diaryTag';
import { IDiaryTagDriver } from '@/driver/interfaces/drivers/diaryTag';
import { IDiaryTagDomainMapper } from '@/domain/interfaces/mapper/diaryTag';

export class DiaryTagRepository implements IDiaryTagRepository {
  constructor(
    private diaryDriver: IDiaryTagDriver,
    private diaryTagDomainMapper: IDiaryTagDomainMapper
  ) {}

  async findDiaryTags() {
    const data = await this.diaryDriver.findDiaryTags();
    return data.map(this.diaryTagDomainMapper.toDomainModel);
  }

  async insertDiaryTag(diaryTag: DiaryTagDomain) {
    const dataModel = this.diaryTagDomainMapper.toDataModel(diaryTag);
    await this.diaryDriver.insertDiaryTag(dataModel);
  }

  async deleteDiaryTag(diaryTag: DiaryTagDomain) {
    const dataModel = this.diaryTagDomainMapper.toDataModel(diaryTag);
    await this.diaryDriver.deleteDiaryTag(dataModel);
  }
}
