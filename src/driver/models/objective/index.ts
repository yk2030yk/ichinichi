import { DataModel } from '@/driver/models/dataModel';

export type SmallObjective = {
  id: number;
  label: string;
};

export type MediumObjective = {
  id: number;
  label: string;
  objectives: SmallObjective[];
};

export type LargeObjective = {
  id: number;
  label: string;
  objectives: MediumObjective[];
};

export type LargeObjectiveDataModel = DataModel<'Objective', LargeObjective>;
