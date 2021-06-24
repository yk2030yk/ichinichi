import { RouteUseCaseResolver } from '@/application/useCaseResolvers';
import { IRouteUseCase } from '@/useCase/interfaces/useCases/route';
import { createUseCaseState } from '../useCaseAtom';

export const {
  atom: routeUseCaseAtom,
  selector: routeUseCaseSelector,
} = createUseCaseState<IRouteUseCase>('route', new RouteUseCaseResolver());
