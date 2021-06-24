type PathOption = { [key: string]: any };

type PathCreator<
  T extends PathOption | undefined = undefined
> = T extends PathOption ? (option: T) => string : () => string;

export interface IRouteUseCase {
  getHomePath: PathCreator;
  getMboHomePath: PathCreator;
  getManageDiaryTagPath: PathCreator;
}
