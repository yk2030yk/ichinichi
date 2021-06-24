import { Dependency } from '@/application/dependency';

export interface IDependencyResolver<T> {
  resolve: () => T;
}

export type IApplicationDependencyResolver = IDependencyResolver<Dependency>;
