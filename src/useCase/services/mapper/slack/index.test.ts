import { SlackPayloadMapper } from '.';

describe('SlackPayloadMapper Test', () => {
  const mapper = new SlackPayloadMapper();

  const diaryEntry = {
    userId: '1',
    content: 'content',
    date: '2021-01-01',
    year: 2021,
    month: 1,
    day: 1,
    tags: [
      { label: 'tag1', color: '#fff' },
      { label: 'tag2', color: '#f00' },
    ],
  };

  describe('createDiaryTimeLinePayload Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.createDiaryTimeLinePayload(diaryEntry);
      expect(result).toMatchObject({
        blocks: [],
        attachments: [
          {
            color: '#daa520',
            fields: [
              {
                title: `1日1つ強くなる(2021-01-01)`,
                value: `
:label: \`tag1\` \`tag2\`

content
`,
              },
            ],
          },
        ],
      });
    });
  });
});
