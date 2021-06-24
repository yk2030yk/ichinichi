import { ThemeRepository } from '@/domain/services/repository/theme';
import { LocalStorage } from '@/driver/services/db/localStorage';
import { ThemeDriver } from '@/driver/services/drivers/theme';
import { ThemeUseCase } from '@/useCase/services/useCases/theme';

export class ThemeUseCaseResolver {
  resolve() {
    return new ThemeUseCase(
      new ThemeRepository(new ThemeDriver(new LocalStorage()))
    );
  }
}
