export type Mapper<DomainModel, DataModel> = {
  toDomainModel: (value: DataModel) => DomainModel;
  toDataModel: (value: DomainModel) => DataModel;
};
