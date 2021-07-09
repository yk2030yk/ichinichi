import { markdown } from '.';

describe('markdown.inline test', () => {
  test('期待値チェック', () => {
    const result = markdown.inlineCode('test');
    expect(result).toBe('`test`');
  });
});
