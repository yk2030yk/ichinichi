export type SmallObjectiveDomain = {
  id: number;
  label: string;
};

export type MediumObjectiveDomain = {
  id: number;
  label: string;
  objectives: SmallObjectiveDomain[];
};

export type LargeObjectiveDomain = {
  id: number;
  label: string;
  objectives: MediumObjectiveDomain[];
};
