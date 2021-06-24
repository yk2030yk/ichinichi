import { IDiaryUseCase } from '@/useCase/interfaces/useCases/diary';
import { IDiaryRepository } from '@/domain/interfaces/repository/diary';
import { DateRepository } from '@/domain/services/repository/date';
import { IDiaryEntryUseCaseMapper } from '@/useCase/interfaces/mapper/diary';
import { DiaryEntry, DiaryTag } from '@/useCase/viewModels/diary';

export class DiaryUseCase implements IDiaryUseCase {
  constructor(
    private diaryRepository: IDiaryRepository,
    private diaryEntryUseCaseMapper: IDiaryEntryUseCaseMapper,
    private dateRepository: DateRepository
  ) {}

  async findDiaryByYear(userId: string, year: number) {
    const diary = await this.diaryRepository.findDiaryByYear(userId, year);
    return diary.map(this.diaryEntryUseCaseMapper.toViewModel);
  }

  async updateDiaryEntry(
    userId: string,
    date: string,
    content: string,
    tags: DiaryTag[]
  ) {
    const dateInfo = this.dateRepository.getDateInfo(date);
    const domainModel = this.diaryEntryUseCaseMapper.toDomainModel({
      userId,
      content,
      tags,
      ...dateInfo,
    });
    const result = await this.diaryRepository.updateDiaryEntry(domainModel);
    return this.diaryEntryUseCaseMapper.toViewModel(result);
  }

  private getDefaultDiaryEntry() {
    // TODO: how to get default model value.
    return this.diaryEntryUseCaseMapper.toViewModel(
      (undefined as unknown) as DiaryEntry
    );
  }

  findDiaryEntryFromDiaryByDate(diary: DiaryEntry[], date: string) {
    const diaryEntry = diary.find((d) => d.date === date);
    return diaryEntry || this.getDefaultDiaryEntry();
  }
}
