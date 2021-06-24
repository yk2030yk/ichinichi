import { diaryUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useDiaryUseCase = () => useRecoilValue(diaryUseCaseSelector);
