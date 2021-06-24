export interface IDateUseCase {
  isToday: (date: string | Date) => boolean;

  getAvailableYears: () => number[];

  getWeekTexts: () => string[];

  getMonthTexts: () => string[];

  getHeatMapCalendar: (
    year: number
  ) => {
    date: string;
    year: number;
    month: number;
    day: number;
    formattedDate: string;
  }[];

  getTimelineCalendar: (
    year: number
  ) => {
    year: number;
    month: number;
    title: string;
    dates: {
      date: string;
      year: number;
      month: number;
      day: number;
      formattedDate: string;
    }[];
  }[];
}
