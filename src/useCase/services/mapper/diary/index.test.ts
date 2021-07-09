import { DiaryEntryUseCaseMapper } from '.';

describe('DiaryEntryUseCaseMapper.toDomainModel Test', () => {
  test('正常に変換することができる', () => {
    const mapper = new DiaryEntryUseCaseMapper();

    const result = mapper.toDomainModel({
      userId: '1',
      content: 'test',
      date: '2021-01-01',
      year: 2021,
      month: 1,
      day: 1,
      tags: [{ label: 'test', color: '#fff' }],
    });

    expect(result).toMatchObject({
      userId: '1',
      content: 'test',
      date: '2021-01-01',
      year: 2021,
      month: 1,
      day: 1,
      tags: [{ label: 'test', color: '#fff' }],
    });
  });
});

describe('DiaryEntryUseCaseMapper.toViewModel Test', () => {
  test('正常に変換することができる', () => {
    const mapper = new DiaryEntryUseCaseMapper();

    const result = mapper.toViewModel({
      userId: '1',
      content: 'test',
      date: '2021-01-01',
      year: 2021,
      month: 1,
      day: 1,
      tags: [{ label: 'test', color: '#fff' }],
    });

    expect(result).toMatchObject({
      userId: '1',
      content: 'test',
      date: '2021-01-01',
      year: 2021,
      month: 1,
      day: 1,
      tags: [{ label: 'test', color: '#fff' }],
    });
  });
});

describe('DiaryEntryUseCaseMapper.getDefaultViewModel Test', () => {
  test('正常に取得できる', () => {
    const mapper = new DiaryEntryUseCaseMapper();

    const result = mapper.getDefaultViewModel();

    expect(result).toMatchObject({
      userId: '',
      date: '',
      year: 0,
      month: 0,
      day: 0,
      content: '',
      tags: [],
    });
  });
});
