import dayjs from 'dayjs';
import { IDateRepository } from '@/domain/interfaces/repository/date';

export class DateRepository implements IDateRepository {
  format(date: string | Date) {
    return dayjs(date).format('YYYY-MM-DD');
  }

  formatDate(date: string | Date, format: string) {
    return dayjs(date).format(format);
  }

  isToday(date: string | Date) {
    return this.format(dayjs(date).toDate()) === this.format(dayjs().toDate());
  }

  isFuture(date: string | Date) {
    return dayjs(date).isAfter(dayjs());
  }

  diff(a: string | Date, b: string | Date) {
    return dayjs(a).diff(dayjs(b));
  }

  getYearFirstDay(year: number) {
    return dayjs(`${year}-01-01`).day();
  }

  getAvailableYears(minYear = 2015) {
    const thisYear = dayjs().year();

    const years = [];
    for (let i = minYear; i <= thisYear; i += 1) {
      years.push(i);
    }

    return years.sort((a, b) => b - a);
  }

  getWeekTexts() {
    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  }

  getMonthTexts() {
    return [
      '',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  getMonthShortTexts() {
    return [
      '',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
  }

  getData(year: number, month: number, day: number) {
    return {
      year,
      month,
      day,
      date: this.format(dayjs(`${year}-${month}-${day}`).toDate()),
    };
  }

  getDateInfo(date: Date | string) {
    const d = dayjs(date);
    return {
      year: d.year(),
      month: d.month(),
      day: d.date(),
      date: this.format(d.toDate()),
    };
  }

  getMonthDateList(year: number, month: number) {
    const list = [];

    const base = dayjs(`${year}-${month}-1`);
    const start = base.startOf('month').date();
    const end = base.endOf('month').date();

    for (let date = start; date <= end; date += 1) {
      list.push(this.getData(year, month, date));
    }

    return list;
  }

  getYearDateList(year = 2021) {
    let list: {
      year: number;
      month: number;
      day: number;
      date: string;
    }[] = [];

    for (let month = 1; month <= 12; month += 1) {
      list = [...list, ...this.getMonthDateList(year, month)];
    }

    return list;
  }

  getTodayData() {
    return this.getDateInfo(dayjs().toDate());
  }
}
