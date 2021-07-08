import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';

export class SlackPayloadMapper implements ISlackPayloadMapper {
  createDiaryTimeLinePayload(message: string) {
    return {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message,
          },
        },
      ],
    };
  }
}
