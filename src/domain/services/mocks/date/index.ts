import { IDateRepository } from '@/domain/interfaces/repository/date';

export const getDateRepositoryMock = (): IDateRepository => ({
  format: jest.fn(),

  formatDate: jest.fn(),

  isToday: jest.fn(),

  isFuture: jest.fn(),

  diff: jest.fn(),

  getYearFirstDay: jest.fn(),

  getAvailableYears: jest.fn(),

  getWeekTexts: jest.fn(),

  getMonthTexts: jest.fn(),

  getMonthShortTexts: jest.fn(),

  getData: jest.fn(),

  getDateInfo: jest.fn(),

  getMonthDateList: jest.fn(),

  getYearDateList: jest.fn(),
});
