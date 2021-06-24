import { themeUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useThemeUseCase = () => useRecoilValue(themeUseCaseSelector);
