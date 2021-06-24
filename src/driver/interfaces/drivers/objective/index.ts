import { LargeObjectiveDataModel } from '@/driver/models/objective';

export interface IObjectiveDriver {
  findObjective: (query: any) => Promise<LargeObjectiveDataModel>;

  updatedObjective: (query: any, objective: LargeObjectiveDataModel) => void;
}
