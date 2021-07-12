import { atom, selector } from 'recoil';
import { IUseCaseResolver } from '@/application/useCaseResolvers/resolvers';

export const createUseCaseState = <T extends any>(
  key: string,
  resolver: IUseCaseResolver<T>
) => {
  const useCaseAtom = atom<T>({
    key: `global/dependency/useCase/atom/${key}`,
    default: resolver.resolve(),
  });

  const useCaseSelector = selector<T>({
    key: `global/dependency/useCase/selector/${key}`,
    get: ({ get }) => get(useCaseAtom),
  });

  /**
   * 更新されないようにatomは隠蔽して、
   * selector経由で取得されるようにする
   */
  return {
    selector: useCaseSelector,
  };
};
