import { getDateRepositoryMock } from '@/domain/services/mocks/date';
import { DateUseCase } from '.';

jest.mock('uuid', () => ({
  v4: jest
    .fn()
    .mockReturnValueOnce('uuid-1')
    .mockReturnValueOnce('uuid-2')
    .mockReturnValueOnce('uuid-3')
    .mockReturnValueOnce('uuid-4'),
}));

const setupMock = () => {
  const isTodayMock = jest.fn().mockReturnValue(true);

  const availableYears = [2021, 2020];
  const getAvailableYearsMock = jest.fn().mockReturnValue(availableYears);

  const weekTexts = ['2021', '2020'];
  const getWeekTextsMock = jest.fn().mockReturnValue(weekTexts);

  const monthTexts = ['1', '2'];
  const getMonthTextsMock = jest.fn().mockReturnValue(monthTexts);

  const yearDateList = [
    {
      year: 2021,
      month: 1,
      day: 1,
      date: '2021/01/01',
    },
    {
      year: 2021,
      month: 1,
      day: 2,
      date: '2021/01/02',
    },
    {
      year: 2021,
      month: 1,
      day: 3,
      date: '2021/01/03',
    },
  ];
  const getYearDateListMock = jest.fn().mockReturnValue(yearDateList);

  const monthShortTexts = ['', 'Jan'];
  const getMonthShortTextsMock = jest.fn().mockReturnValue(monthShortTexts);

  const yearFirstDay = 2;
  const getYearFirstDayMock = jest.fn().mockReturnValue(yearFirstDay);

  const formatDateMock = jest.fn().mockImplementation((s: string) => {
    if (s === '2021/01/01') return '2021-01-01';
    if (s === '2021/01/02') return '2021-01-02';
    if (s === '2021/01/03') return '2021-01-03';
    return '';
  });

  const isFutureMock = jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);

  const diffMock = jest
    .fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(-1);

  const dateRepositoryMock = getDateRepositoryMock();
  dateRepositoryMock.isToday = isTodayMock;
  dateRepositoryMock.getAvailableYears = getAvailableYearsMock;
  dateRepositoryMock.getWeekTexts = getWeekTextsMock;
  dateRepositoryMock.getYearDateList = getYearDateListMock;
  dateRepositoryMock.getMonthTexts = getMonthTextsMock;
  dateRepositoryMock.getMonthShortTexts = getMonthShortTextsMock;
  dateRepositoryMock.getYearFirstDay = getYearFirstDayMock;
  dateRepositoryMock.formatDate = formatDateMock;
  dateRepositoryMock.isFuture = isFutureMock;
  dateRepositoryMock.diff = diffMock;

  const useCase = new DateUseCase(dateRepositoryMock);

  return {
    useCase,
    isTodayMock,
    availableYears,
    getAvailableYearsMock,
    weekTexts,
    getWeekTextsMock,
    monthTexts,
    getMonthTextsMock,
    yearDateList,
    monthShortTexts,
    getYearDateListMock,
    getYearFirstDayMock,
    formatDateMock,
    getMonthShortTextsMock,
    isFutureMock,
    diffMock,
  };
};

describe('DateUseCase.isToday Test', () => {
  test('文字列で判定ができる', () => {
    const { useCase, isTodayMock } = setupMock();
    const date = '2021-01-01';
    const result = useCase.isToday(date);

    expect(result).toBe(true);
    expect(isTodayMock.mock.calls.length).toBe(1);
    expect(isTodayMock.mock.calls[0][0]).toBe(date);
  });

  test('Date型で判定ができる', () => {
    const { useCase, isTodayMock } = setupMock();

    const date = new Date('2021-01-01');
    const result = useCase.isToday(date);

    expect(result).toBe(true);
    expect(isTodayMock.mock.calls.length).toBe(1);
    expect(isTodayMock.mock.calls[0][0]).toBe(date);
  });
});

describe('DateUseCase.getAvailableYears Test', () => {
  test('返り値が期待通り', () => {
    const { useCase, availableYears, getAvailableYearsMock } = setupMock();
    const result = useCase.getAvailableYears();

    expect(result).toBe(availableYears);
    expect(getAvailableYearsMock.mock.calls.length).toBe(1);
    expect(getAvailableYearsMock.mock.calls[0].length).toBe(0);
  });
});

describe('DateUseCase.getWeekTexts Test', () => {
  test('返り値が期待通り', () => {
    const { useCase, weekTexts, getWeekTextsMock } = setupMock();
    const result = useCase.getWeekTexts();

    expect(result).toBe(weekTexts);
    expect(getWeekTextsMock.mock.calls.length).toBe(1);
    expect(getWeekTextsMock.mock.calls[0].length).toBe(0);
  });
});

describe('DateUseCase.getMonthTexts Test', () => {
  test('返り値が期待通り', () => {
    const { useCase, monthTexts, getMonthTextsMock } = setupMock();
    const result = useCase.getMonthTexts();

    expect(result).toBe(monthTexts);
    expect(getMonthTextsMock.mock.calls.length).toBe(1);
    expect(getMonthTextsMock.mock.calls[0].length).toBe(0);
  });
});

describe('DateUseCase.getHeatMapCalendar Test', () => {
  test('返り値が期待通り', () => {
    const {
      useCase,
      getYearDateListMock,
      getYearFirstDayMock,
      formatDateMock,
    } = setupMock();
    const result = useCase.getHeatMapCalendar(2021);

    expect(result).toMatchObject([
      {
        date: '',
        year: 0,
        month: 0,
        day: 0,
        formattedDate: '',
        key: 'uuid-1',
      },
      {
        date: '',
        year: 0,
        month: 0,
        day: 0,
        formattedDate: '',
        key: 'uuid-2',
      },
      {
        year: 2021,
        month: 1,
        day: 1,
        date: '2021/01/01',
        formattedDate: '2021-01-01',
        key: '2021/01/01',
      },
      {
        year: 2021,
        month: 1,
        day: 2,
        date: '2021/01/02',
        formattedDate: '2021-01-02',
        key: '2021/01/02',
      },
      {
        year: 2021,
        month: 1,
        day: 3,
        date: '2021/01/03',
        formattedDate: '2021-01-03',
        key: '2021/01/03',
      },
    ]);

    expect(getYearDateListMock.mock.calls.length).toBe(1);
    expect(getYearDateListMock.mock.calls[0].length).toBe(1);
    expect(getYearDateListMock.mock.calls[0][0]).toBe(2021);

    expect(getYearFirstDayMock.mock.calls.length).toBe(1);
    expect(getYearFirstDayMock.mock.calls[0].length).toBe(1);
    expect(getYearFirstDayMock.mock.calls[0][0]).toBe(2021);

    expect(formatDateMock.mock.calls.length).toBe(3);
    expect(formatDateMock.mock.calls[0].length).toBe(2);
    expect(formatDateMock.mock.calls[0][0]).toBe('2021/01/01');
    expect(formatDateMock.mock.calls[0][1]).toBe('YYYY/MM/DD');
    expect(formatDateMock.mock.calls[1].length).toBe(2);
    expect(formatDateMock.mock.calls[1][0]).toBe('2021/01/02');
    expect(formatDateMock.mock.calls[1][1]).toBe('YYYY/MM/DD');
    expect(formatDateMock.mock.calls[2].length).toBe(2);
    expect(formatDateMock.mock.calls[2][0]).toBe('2021/01/03');
    expect(formatDateMock.mock.calls[2][1]).toBe('YYYY/MM/DD');
  });
});

describe('DateUseCase.getTimelineCalendar Test', () => {
  test('返り値が期待通り', () => {
    const {
      useCase,
      getYearDateListMock,
      getMonthShortTextsMock,
      diffMock,
      formatDateMock,
      isFutureMock,
    } = setupMock();

    const result = useCase.getTimelineCalendar(2021);

    expect(result).toMatchObject([
      {
        year: 2021,
        month: 1,
        title: 'Jan. 2021',
        dates: [
          {
            year: 2021,
            month: 1,
            day: 2,
            date: '2021/01/02',
            formattedDate: '2021-01-02',
          },
          {
            year: 2021,
            month: 1,
            day: 1,
            date: '2021/01/01',
            formattedDate: '2021-01-01',
          },
        ],
      },
    ]);

    expect(getYearDateListMock.mock.calls.length).toBe(1);
    expect(getYearDateListMock.mock.calls[0].length).toBe(1);
    expect(getYearDateListMock.mock.calls[0][0]).toBe(2021);

    expect(getMonthShortTextsMock.mock.calls.length).toBe(1);
    expect(getMonthShortTextsMock.mock.calls[0].length).toBe(0);

    expect(isFutureMock.mock.calls.length).toBe(3);
    expect(isFutureMock.mock.calls[0].length).toBe(1);
    expect(isFutureMock.mock.calls[0][0]).toBe('2021/01/01');
    expect(isFutureMock.mock.calls[1].length).toBe(1);
    expect(isFutureMock.mock.calls[1][0]).toBe('2021/01/02');
    expect(isFutureMock.mock.calls[2].length).toBe(1);
    expect(isFutureMock.mock.calls[2][0]).toBe('2021/01/03');

    expect(diffMock.mock.calls.length).toBe(1);
    expect(diffMock.mock.calls[0].length).toBe(2);
    expect(diffMock.mock.calls[0][0]).toBe('2021/01/02');
    expect(diffMock.mock.calls[0][1]).toBe('2021/01/01');

    expect(formatDateMock.mock.calls.length).toBe(2);
    expect(formatDateMock.mock.calls[0].length).toBe(2);
    expect(formatDateMock.mock.calls[0][0]).toBe('2021/01/02');
    expect(formatDateMock.mock.calls[0][1]).toBe('YYYY/MM/DD');
    expect(formatDateMock.mock.calls[1].length).toBe(2);
    expect(formatDateMock.mock.calls[1][0]).toBe('2021/01/01');
    expect(formatDateMock.mock.calls[1][1]).toBe('YYYY/MM/DD');
  });
});
