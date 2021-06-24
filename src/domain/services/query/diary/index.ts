import { IDiaryEntryQuery } from '@/domain/interfaces/query/diary';
import { DataModelKey } from '@/driver/constants/nedb/dataModelKey';

export class DiaryEntryQuery implements IDiaryEntryQuery {
  findDiaryByYearQuery(userId: string, year: number) {
    return {
      key: DataModelKey.DiaryEntry,
      'data.userId': userId,
      'data.year': year,
    };
  }

  updateDiaryEntryQuery(userId: string, date: string) {
    return {
      key: DataModelKey.DiaryEntry,
      'data.userId': userId,
      'data.date': date,
    };
  }
}
