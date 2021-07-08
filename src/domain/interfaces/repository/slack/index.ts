export interface ISlackRepository {
  sendMessage: (webhookUrl: string, payload: any) => void;
}
