import { DataModel } from '@/driver/models/dataModel';

export type DiaryEntryDataModel = DataModel<
  'DiaryEntry',
  {
    userId: string;
    content: string;
    tags: {
      label: string;
      color: string;
    }[];
    date: string;
    year: number;
    month: number;
    day: number;
  }
>;

export type DiaryTagDataModel = DataModel<
  'DiaryTag',
  {
    label: string;
    color: string;
  }
>;
