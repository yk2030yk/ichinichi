import { isNullOrUndefined } from '@/core/utils/is';
import { IDiaryEntryDomainMapper } from '@/domain/interfaces/mapper/diary';
import { DiaryEntryDomain } from '@/domain/domainModels/diary';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';
import { DiaryEntryDataModel } from '@/driver/models/diary';
import { exceptionThrower } from '../../exceptionThrower';

export class DiaryEntryDomainMapper implements IDiaryEntryDomainMapper {
  getDefaultDomainModel(): DiaryEntryDomain {
    return {
      userId: '',
      content: '',
      date: '',
      year: 0,
      month: 0,
      day: 0,
      tags: [],
    };
  }

  toDomainModel(dataModel: DiaryEntryDataModel): DiaryEntryDomain {
    if (isNullOrUndefined(dataModel)) {
      return this.getDefaultDomainModel();
    }

    return dataModel.data;
  }

  toDataModel(domainModel: DiaryEntryDomain): DiaryEntryDataModel {
    if (isNullOrUndefined(domainModel)) {
      exceptionThrower.throwMapperException();
    }

    return {
      key: DataModelKey.DiaryEntry,
      data: domainModel,
    };
  }
}
