import { LargeObjective } from '@/driver/models/objective';
import { ObjectiveUseCaseMapper } from '.';

describe('ObjectiveUseCaseMapper Test', () => {
  const mapper = new ObjectiveUseCaseMapper();

  const defaultViewModel = {
    id: 0,
    label: '',
    objectives: [],
  };

  const viewModel = {
    id: 1,
    label: 'label',
    objectives: [],
  };

  const domainModel = {
    id: 1,
    label: 'label',
    objectives: [],
  };

  describe('toDomainModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toDomainModel(viewModel);
      expect(result).toMatchObject(domainModel);
    });

    test('undefinedでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel(
        (undefined as unknown) as LargeObjective
      );
      expect(result).toMatchObject(defaultViewModel);
    });

    test('nullでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((null as unknown) as LargeObjective);
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
