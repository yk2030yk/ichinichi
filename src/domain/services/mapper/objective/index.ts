import { isNullOrUndefined } from '@/core/utils/is';
import { IObjectiveDomainMapper } from '@/domain/interfaces/mapper/objective';
import { LargeObjectiveDomain } from '@/domain/domainModels/objective';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';
import { LargeObjectiveDataModel } from '@/driver/models/objective';
import { exceptionThrower } from '@/domain/services/exceptionThrower';

export class ObjectiveDomainMapper implements IObjectiveDomainMapper {
  getDefaultDomainModel(): LargeObjectiveDomain {
    return {
      id: 0,
      label: '',
      objectives: [],
    };
  }

  toDomainModel(dataModel: LargeObjectiveDataModel): LargeObjectiveDomain {
    if (isNullOrUndefined(dataModel)) {
      this.getDefaultDomainModel();
    }

    return dataModel.data;
  }

  toDataModel(domainModel: LargeObjectiveDomain): LargeObjectiveDataModel {
    if (isNullOrUndefined(domainModel)) {
      exceptionThrower.throwMapperException();
    }

    return {
      key: DataModelKey.Objective,
      data: domainModel,
    };
  }
}
