import { DiaryEntry } from '@/useCase/viewModels/diary';

export interface ISlackPayloadMapper {
  createDiaryTimeLinePayload: (diaryEntry: DiaryEntry) => any;
}
