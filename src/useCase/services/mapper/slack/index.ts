import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';
import { DiaryEntry } from '@/useCase/viewModels/diary';

const slackIcons = {
  tag: ':label:',
};

const slackMarkdownInlineCode = (text: string) => `\`${text}\``;

export class SlackPayloadMapper implements ISlackPayloadMapper {
  createDiaryTimeLinePayload(diaryEntry: DiaryEntry) {
    const tagInlineCodeList = diaryEntry.tags
      .map((t) => t.label)
      .map(slackMarkdownInlineCode)
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
