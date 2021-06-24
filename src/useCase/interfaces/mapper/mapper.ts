export type Mapper<V, D> = {
  toViewModel: (value: D) => V;
  toDomainModel: (value: V) => D;
};
