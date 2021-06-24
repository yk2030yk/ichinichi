import { DataModelKeys } from '@/driver/constants/nedb/dataModelKey';

export interface IDiaryEntryQuery {
  findDiaryByYearQuery: (
    userId: string,
    year: number
  ) => {
    key: DataModelKeys['DiaryEntry'];
    'data.userId': string;
    'data.year': number;
  };

  updateDiaryEntryQuery: (
    userId: string,
    date: string
  ) => {
    key: DataModelKeys['DiaryEntry'];
    'data.userId': string;
    'data.date': string;
  };
}
