import { DiaryEntry } from '@/useCase/viewModels/diary';
import { DiaryEntryDomain } from '@/domain/domainModels/diary';
import { Mapper } from '../mapper';

export type IDiaryEntryUseCaseMapper = Mapper<DiaryEntry, DiaryEntryDomain>;
