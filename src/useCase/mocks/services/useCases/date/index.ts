import { IDateUseCase } from '@/useCase/interfaces/useCases/date';

export const getDateUseCaseMock = (): IDateUseCase => ({
  isToday: jest.fn(),
  getAvailableYears: jest.fn(),
  getWeekTexts: jest.fn(),
  getMonthTexts: jest.fn(),
  getHeatMapCalendar: jest.fn(),
  getTimelineCalendar: jest.fn(),
});