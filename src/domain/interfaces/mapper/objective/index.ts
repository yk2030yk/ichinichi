import { LargeObjectiveDomain } from '@/domain/domainModels/objective';
import { LargeObjectiveDataModel } from '@/driver/models/objective';
import { Mapper } from '../mapper';

export type IObjectiveDomainMapper = Mapper<
  LargeObjectiveDomain,
  LargeObjectiveDataModel
>;
