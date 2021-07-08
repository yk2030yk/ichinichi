export interface ISlackPayloadMapper {
  createDiaryTimeLinePayload: (message: string) => any;
}
