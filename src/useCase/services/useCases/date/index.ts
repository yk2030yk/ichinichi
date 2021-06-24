import { IDateUseCase } from '@/useCase/interfaces/useCases/date';
import { DateRepository } from '@/domain/services/repository/date';

export class DateUseCase implements IDateUseCase {
  constructor(private dateRepository: DateRepository) {}

  isToday(date: string | Date) {
    return this.dateRepository.isToday(date);
  }

  getAvailableYears() {
    return this.dateRepository.getAvailableYears();
  }

  getWeekTexts() {
    return this.dateRepository.getWeekTexts();
  }

  getMonthTexts() {
    return this.dateRepository.getMonthTexts();
  }

  getHeatMapCalendar(year: number) {
    const yearDateList = this.dateRepository.getYearDateList(year);
    const yearFirstDay = this.dateRepository.getYearFirstDay(year);

    const emptyData = [...Array(yearFirstDay)].map(() => ({
      date: '',
      year: 0,
      month: 0,
      day: 0,
      formattedDate: '',
    }));

    return [
      ...emptyData,
      ...yearDateList.map((d) => ({
        ...d,
        formattedDate: this.dateRepository.formatDate(d.date, 'YYYY/MM/DD'),
      })),
    ];
  }

  getTimelineCalendar(year: number) {
    const list = this.dateRepository.getYearDateList(year);
    const monthTexts = this.dateRepository.getMonthShortTexts();

    const r: {
      year: number;
      month: number;
      title: string;
      dates: {
        year: number;
        month: number;
        day: number;
        date: string;
        formattedDate: string;
      }[];
    }[] = [];

    const n = list
      .filter((v) => !this.dateRepository.isFuture(v.date))
      .sort((a, b) => this.dateRepository.diff(a.date, b.date) * -1)
      .reduce((p, c) => {
        const findMonth = (v: { month: number }) => v.month === c.month;
        const filterMonth = (v: { month: number }) => !findMonth(v);

        const data = p.find(findMonth) || {
          year,
          month: c.month,
          title: `${monthTexts[c.month]}. ${year}`,
          dates: [],
        };
        data.dates.push({
          ...c,
          formattedDate: this.dateRepository.formatDate(c.date, 'YYYY/MM/DD'),
        });

        return [...p.filter(filterMonth), data];
      }, r);

    return n;
  }
}
