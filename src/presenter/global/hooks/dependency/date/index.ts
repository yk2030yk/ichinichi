import { dateUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useDateUseCase = () => useRecoilValue(dateUseCaseSelector);
