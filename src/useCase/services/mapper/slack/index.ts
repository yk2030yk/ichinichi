import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';

export class SlackPayloadMapper implements ISlackPayloadMapper {
  createDiaryTimeLinePayload(message: string) {
    return {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '1日1つ強くなる',
          },
        },
        {
          type: 'divider',
        },
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
