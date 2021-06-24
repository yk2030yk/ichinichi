import { DiaryEntryDomain } from '@/domain/domainModels/diary';
import { DiaryEntryDataModel } from '@/driver/models/diary';
import { Mapper } from '../mapper';

export type IDiaryEntryDomainMapper = Mapper<
  DiaryEntryDomain,
  DiaryEntryDataModel
>;
