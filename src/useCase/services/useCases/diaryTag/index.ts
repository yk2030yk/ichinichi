import { DiaryTag } from '@/useCase/viewModels/diary';
import { IDiaryTagUseCase } from '@/useCase/interfaces/useCases/diaryTag';
import { IDiaryTagRepository } from '@/domain/interfaces/repository/diaryTag';
import { IDiaryTagUseCaseMapper } from '@/useCase/interfaces/mapper/diaryTag';

export class DiaryTagUseCase implements IDiaryTagUseCase {
  constructor(
    private diaryTagRepository: IDiaryTagRepository,
    private diaryTagUseCaseMapper: IDiaryTagUseCaseMapper
  ) {}

  async findDiaryTags() {
    const diaryTags = await this.diaryTagRepository.findDiaryTags();
    return diaryTags.map(this.diaryTagUseCaseMapper.toViewModel);
  }

  async insertDiaryTag(diaryTag: DiaryTag) {
    const domainModel = this.diaryTagUseCaseMapper.toDomainModel(diaryTag);
    this.diaryTagRepository.insertDiaryTag(domainModel);
  }

  async deleteDiaryTag(diaryTag: DiaryTag) {
    const domainModel = this.diaryTagUseCaseMapper.toDomainModel(diaryTag);
    this.diaryTagRepository.deleteDiaryTag(domainModel);
  }
}
