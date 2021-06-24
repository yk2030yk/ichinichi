import { DiaryUseCaseResolver } from '@/application/useCaseResolvers';
import { IDiaryUseCase } from '@/useCase/interfaces/useCases/diary';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: diaryUseCaseAtom,
  selector: diaryUseCaseSelector,
} = createUseCaseState<IDiaryUseCase>('diary', new DiaryUseCaseResolver());
