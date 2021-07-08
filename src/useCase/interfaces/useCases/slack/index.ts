export interface ISlackUseCase {
  sendDiaryTimeLine: (webhookUrl: string, message: string) => void;
}
