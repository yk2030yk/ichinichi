import { ApplicationExceptionBase } from './base';

describe('ApplicationExceptionBase Test', () => {
  test('エラーメッセージが期待通り', () => {
    const error = new ApplicationExceptionBase('some error');
    expect(error.message).toBe(
      'Application Error Occurred.\nDetail: some error'
    );
  });
});
