import { diaryTagUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useDiaryTagUseCase = () => useRecoilValue(diaryTagUseCaseSelector);
