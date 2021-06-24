import { objectiveUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useObjectiveUseCase = () =>
  useRecoilValue(objectiveUseCaseSelector);
