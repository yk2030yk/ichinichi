import { DiaryTag } from '@/useCase/viewModels/diary';
import { DiaryTagDomain } from '@/domain/domainModels/diary';
import { isNullOrUndefined } from '@/core/utils/is';
import { IDiaryTagUseCaseMapper } from '@/useCase/interfaces/mapper/diaryTag';

export class DiaryTagUseCaseMapper implements IDiaryTagUseCaseMapper {
  getDefaultViewModel(): DiaryTag {
    return {
      label: '',
      color: '',
    };
  }

  toViewModel(domainModel: DiaryTagDomain): DiaryTag {
    if (isNullOrUndefined(domainModel)) {
      return this.getDefaultViewModel();
    }
    return { ...domainModel };
  }

  toDomainModel(viewModel: DiaryTag): DiaryTagDomain {
    return { ...viewModel };
  }
}
