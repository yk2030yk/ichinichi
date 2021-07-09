import { DiaryEntry } from '@/useCase/viewModels/diary';

export interface ISlackUseCase {
  sendDiaryTimeLine: (webhookUrl: string, diaryEntry: DiaryEntry) => void;
}
