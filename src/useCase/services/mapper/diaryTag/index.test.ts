import { DiaryTag } from '@/useCase/viewModels/diary';
import { DiaryTagUseCaseMapper } from '.';

describe('DiaryTagUseCaseMapper Test', () => {
  const mapper = new DiaryTagUseCaseMapper();

  const defaultViewModel = {
    label: '',
    color: '',
  };

  const viewModel = {
    label: 'label',
    color: '#fff',
  };

  const domainModel = {
    label: 'label',
    color: '#fff',
  };

  describe('toDomainModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toDomainModel(viewModel);
      expect(result).toMatchObject(domainModel);
    });

    test('undefinedでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((undefined as unknown) as DiaryTag);
      expect(result).toMatchObject(defaultViewModel);
    });

    test('nullでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((null as unknown) as DiaryTag);
      expect(result).toMatchObject(defaultViewModel);
    });
  });

  describe('toViewModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toViewModel(domainModel);
      expect(result).toMatchObject(viewModel);
    });
  });

  describe('getDefaultViewModel Test', () => {
    test('正常に取得できる', () => {
      const result = mapper.getDefaultViewModel();
      expect(result).toMatchObject(defaultViewModel);
    });
  });
});
