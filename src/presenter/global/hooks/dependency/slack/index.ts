import { slackUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useSlackUseCase = () => useRecoilValue(slackUseCaseSelector);
