import { isNullOrUndefined } from '@/core/utils/value';
import { DiaryTagDomain } from '@/domain/domainModels/diary';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';
import { DiaryTagDataModel } from '@/driver/models/diary';
import { IDiaryTagDomainMapper } from '@/domain/interfaces/mapper/diaryTag';
import { exceptionThrower } from '../../exceptionThrower';

export class DiaryTagDomainMapper implements IDiaryTagDomainMapper {
  getDefaultDomainModel(): DiaryTagDomain {
    return {
      label: '',
      color: '',
    };
  }

  toDomainModel(dataModel: DiaryTagDataModel): DiaryTagDomain {
    if (isNullOrUndefined(dataModel)) {
      return this.getDefaultDomainModel();
    }

    return dataModel.data;
  }

  toDataModel(domainModel: DiaryTagDomain): DiaryTagDataModel {
    if (isNullOrUndefined(domainModel)) {
      exceptionThrower.throwMapperException();
    }

    return {
      key: DataModelKey.DiaryTag,
      data: domainModel,
    };
  }
}
