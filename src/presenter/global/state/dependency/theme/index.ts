import { ThemeUseCaseResolver } from '@/application/useCaseResolvers';
import { IThemeUseCase } from '@/useCase/interfaces/useCases/theme';
import { createUseCaseState } from '../useCaseAtom';

export const { selector: themeUseCaseSelector } = createUseCaseState<
  IThemeUseCase
>('theme', new ThemeUseCaseResolver());
