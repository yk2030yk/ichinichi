import { SlackMarkdown } from '.';

describe('markdown.inlineCode test', () => {
  let slackMarkdown: SlackMarkdown;

  beforeAll(() => {
    slackMarkdown = new SlackMarkdown();
  });

  test('インラインコードブロックでラップされる', () => {
    const result = slackMarkdown.inlineCode('test');
    expect(result).toBe('`test`');
  });
});
