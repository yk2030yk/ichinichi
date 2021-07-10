import { markdown } from '.';

describe('markdown.inlineCode test', () => {
  test('インラインコードブロックでラップされる', () => {
    const result = markdown.inlineCode('test');
    expect(result).toBe('`test`');
  });
});
