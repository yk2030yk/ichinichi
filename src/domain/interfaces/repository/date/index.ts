import { DateInfoDomain } from '@/domain/domainModels/date';

export interface IDateRepository {
  format: (date: string | Date) => string;

  formatDate: (date: string | Date, format: string) => string;

  isToday: (date: string | Date) => boolean;

  isFuture: (date: string | Date) => boolean;

  diff: (a: string | Date, b: string | Date) => number;

  getYearFirstDay: (year: number) => number;

  getAvailableYears: (minYear: number) => number[];

  getWeekTexts: () => string[];

  getMonthTexts: () => string[];

  getMonthShortTexts: () => string[];

  getData: (year: number, month: number, day: number) => DateInfoDomain;

  getDateInfo: (date: Date | string) => DateInfoDomain;

  getMonthDateList: (year: number, month: number) => DateInfoDomain[];

  getYearDateList: (year?: number) => DateInfoDomain[];
}
