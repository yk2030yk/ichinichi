import { DiaryTagUseCaseResolver } from '@/application/useCaseResolvers';
import { IDiaryTagUseCase } from '@/useCase/interfaces/useCases/diaryTag';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: diaryTagUseCaseAtom,
  selector: diaryTagUseCaseSelector,
} = createUseCaseState<IDiaryTagUseCase>(
  'diaryTag',
  new DiaryTagUseCaseResolver()
);
