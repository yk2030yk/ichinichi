import { DiaryTagDomain } from '@/domain/domainModels/diary';
import { DiaryTagDataModel } from '@/driver/models/diary';
import { Mapper } from '../mapper';

export type IDiaryTagDomainMapper = Mapper<DiaryTagDomain, DiaryTagDataModel>;
