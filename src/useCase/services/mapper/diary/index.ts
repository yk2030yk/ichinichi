import { DiaryEntry } from '@/useCase/viewModels/diary';
import { DiaryEntryDomain } from '@/domain/domainModels/diary';
import { IDiaryEntryUseCaseMapper } from '@/useCase/interfaces/mapper/diary';
import { isNullOrUndefined } from '@/core/utils/is';

export class DiaryEntryUseCaseMapper implements IDiaryEntryUseCaseMapper {
  getDefaultViewModel(): DiaryEntry {
    return {
      userId: '',
      date: '',
      year: 0,
      month: 0,
      day: 0,
      content: '',
      tags: [],
    };
  }

  toViewModel(domainModel: DiaryEntryDomain): DiaryEntry {
    if (isNullOrUndefined(domainModel)) {
      return this.getDefaultViewModel();
    }
    return { ...domainModel };
  }

  toDomainModel(viewModel: DiaryEntry): DiaryEntryDomain {
    return { ...viewModel };
  }
}
