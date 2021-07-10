import { DiaryEntry } from '@/useCase/viewModels/diary';
import { DiaryEntryUseCaseMapper } from '.';

describe('DiaryEntryUseCaseMapper Test', () => {
  const mapper = new DiaryEntryUseCaseMapper();

  const defaultViewModel = {
    userId: '',
    date: '',
    year: 0,
    month: 0,
    day: 0,
    content: '',
    tags: [],
  };

  const viewModel = {
    userId: '1',
    content: 'test',
    date: '2021-01-01',
    year: 2021,
    month: 1,
    day: 1,
    tags: [{ label: 'test', color: '#fff' }],
  };

  const domainModel = {
    userId: '1',
    content: 'test',
    date: '2021-01-01',
    year: 2021,
    month: 1,
    day: 1,
    tags: [{ label: 'test', color: '#fff' }],
  };

  describe('toDomainModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toDomainModel(viewModel);
      expect(result).toMatchObject(domainModel);
    });

    test('undefinedでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((undefined as unknown) as DiaryEntry);
      expect(result).toMatchObject(defaultViewModel);
    });

    test('nullでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((null as unknown) as DiaryEntry);
      expect(result).toMatchObject(defaultViewModel);
    });
  });

  describe('toViewModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toViewModel(domainModel);
      expect(result).toMatchObject(viewModel);
    });
  });

  describe('DiaryEntryUseCaseMapper.getDefaultViewModel Test', () => {
    test('正常に取得できる', () => {
      const result = mapper.getDefaultViewModel();
      expect(result).toMatchObject(defaultViewModel);
    });
  });
});
