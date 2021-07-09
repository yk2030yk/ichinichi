import { slackIcons } from '@/useCase/constants/slack';
import { ISlackPayloadMapper } from '@/useCase/interfaces/mapper/slack';
import { DiaryEntry } from '@/useCase/viewModels/diary';
import { markdown } from '@/useCase/utils/slack';

export class SlackPayloadMapper implements ISlackPayloadMapper {
  createDiaryTimeLinePayload(diaryEntry: DiaryEntry) {
    const tagInlineCodeList = diaryEntry.tags
      .map((t) => t.label)
      .map(markdown.inlineCode)
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
