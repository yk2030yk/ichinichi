import { Setting } from '@/useCase/viewModels/setting';
import { SettingUseCaseMapper } from '.';

describe('SettingUseCaseMapper Test', () => {
  const mapper = new SettingUseCaseMapper();

  const defaultViewModel = {
    slackWebhookUrl: '',
  };

  const viewModel = {
    slackWebhookUrl: 'https://example.com/',
  };

  const domainModel = {
    slackWebhookUrl: 'https://example.com/',
  };

  describe('toDomainModel Test', () => {
    test('正常に変換することができる', () => {
      const result = mapper.toDomainModel(viewModel);
      expect(result).toMatchObject(domainModel);
    });

    test('undefinedでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((undefined as unknown) as Setting);
      expect(result).toMatchObject(defaultViewModel);
    });

    test('nullでデフォルト値が返ってくる', () => {
      const result = mapper.toDomainModel((null as unknown) as Setting);
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
