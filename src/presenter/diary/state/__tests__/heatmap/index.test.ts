import { dateUseCaseAtom } from '@/presenter/global/state/dependency/date';
import { getDateUseCaseMock } from '@/useCase/mocks/services/useCases/date';
import { snapshot_UNSTABLE } from 'recoil';
import { selectedYearAtom } from '../../diary';
import { weekTextsSelector, heatMapCalendarSelector } from '../../heatmap';

describe('weekTextsSelector test.', () => {
  test('get: should call useCase.', () => {
    const weekTexts = ['test'];

    const dateUseCase = getDateUseCaseMock();
    const getWeekTextsMock = jest.fn().mockReturnValue(weekTexts);
    dateUseCase.getWeekTexts = getWeekTextsMock;

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(dateUseCaseAtom, dateUseCase);
    });

    const value = testSnapshot.getLoadable(weekTextsSelector).getValue();

    expect(value).toMatchObject(weekTexts);
    expect(getWeekTextsMock.mock.calls.length).toBe(1);
    expect(getWeekTextsMock.mock.calls[0].length).toBe(0);
  });
});

describe('heatMapCalendarSelector test.', () => {
  test('get: should call useCase.', () => {
    const year = 2021;
    const heatMapCalendar = [
      {
        date: '2021-01-01',
        year: 2021,
        month: 1,
        day: 1,
        formattedDate: '2021/01/01',
      },
    ];

    const dateUseCase = getDateUseCaseMock();
    const getHeatMapCalendarMock = jest.fn().mockReturnValue(heatMapCalendar);
    dateUseCase.getHeatMapCalendar = getHeatMapCalendarMock;

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(dateUseCaseAtom, dateUseCase);
      set(selectedYearAtom, year);
    });

    const value = testSnapshot.getLoadable(heatMapCalendarSelector).getValue();

    expect(value).toMatchObject(heatMapCalendar);
    expect(getHeatMapCalendarMock.mock.calls.length).toBe(1);
    expect(getHeatMapCalendarMock.mock.calls[0][0]).toBe(year);
  });
});
