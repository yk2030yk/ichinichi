import { nedbMock } from '@/driver/mocks/db/nedb';
import { DiaryDriver } from '.';

describe('SlackPayloadMapper Test', () => {
  const dbMock = nedbMock();
  const driver = new DiaryDriver(dbMock);

  const diaryEntry = {
    key: 'DiaryEntry' as const,
    data: {
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
    },
  };

  const diary = [diaryEntry];

  describe('findDiary Test', () => {
    test('取得ができる', async () => {
      const query = {};
      const findMock = jest.fn().mockReturnValue(diary);
      dbMock.find = findMock;
      const result = await driver.findDiary(query);

      expect(findMock.mock.calls.length).toBe(1);
      expect(findMock.mock.calls[0].length).toBe(1);
      expect(findMock.mock.calls[0][0]).toMatchObject(query);
      expect(result).toMatchObject(diary);
    });
  });

  describe('updateDiary Test', () => {
    test('登録ができる', async () => {
      const query = {};
      const updateMock = jest.fn().mockReturnValue(diary);
      dbMock.update = updateMock;
      const result = await driver.updateDiary(query, diaryEntry);

      expect(updateMock.mock.calls.length).toBe(1);
      expect(updateMock.mock.calls[0].length).toBe(2);
      expect(updateMock.mock.calls[0][0]).toMatchObject(query);
      expect(updateMock.mock.calls[0][1]).toMatchObject(diaryEntry);
      expect(result).toMatchObject(diaryEntry);
    });
  });
});
