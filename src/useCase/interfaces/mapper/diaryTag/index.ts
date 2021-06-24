import { DiaryTag } from '@/useCase/viewModels/diary';
import { DiaryTagDomain } from '@/domain/domainModels/diary';
import { Mapper } from '../mapper';

export type IDiaryTagUseCaseMapper = Mapper<DiaryTag, DiaryTagDomain>;
