import { routeUseCaseSelector } from '@/presenter/global/state/dependency';
import { useRecoilValue } from 'recoil';

export const useRouteUseCase = () => useRecoilValue(routeUseCaseSelector);
