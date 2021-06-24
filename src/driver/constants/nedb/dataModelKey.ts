export const DataModelKey = {
  DiaryEntry: 'DiaryEntry',
  DiaryTag: 'DiaryTag',
  Setting: 'Setting',
  Objective: 'Objective',
} as const;

export type DataModelKeys = typeof DataModelKey;
