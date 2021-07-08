import { loggerUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useLoggerUseCase = () => useRecoilValue(loggerUseCaseSelector);
