import { slackIcons } from '@/useCase/constants/slack';
import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';
import { DiaryEntry } from '@/useCase/viewModels/diary';
import { SlackMarkdown } from '@/useCase/utils/slack';

export class SlackPayloadMapper implements ISlackPayloadMapper {
  private slackMarkdown: SlackMarkdown;

  constructor() {
    this.slackMarkdown = new SlackMarkdown();
  }

  createDiaryTimeLinePayload(diaryEntry: DiaryEntry) {
    const tagInlineCodeList = diaryEntry.tags
      .map((t) => t.label)
      .map(this.slackMarkdown.inlineCode)
      .join(' ');

    return {
      blocks: [],
      attachments: [
        {
          color: '#daa520',
          fields: [
            {
              title: `1日1つ強くなる(${diaryEntry.date})`,
              value: `
${slackIcons.tag} ${tagInlineCodeList}

${diaryEntry.content}
`,
            },
          ],
        },
      ],
    };
  }
}
