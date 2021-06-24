import { dateUseCaseAtom } from '@/presenter/global/state/dependency/date';
import { diaryUseCaseAtom } from '@/presenter/global/state/dependency/diary';
import { snapshot_UNSTABLE } from 'recoil';
import { diaryAtom, selectedYearAtom } from '../../diary';
import {
  weekTextsSelector,
  heatMapCalendarSelector,
  tooltipDiaryEntrySelector,
  tooltipDateAtom,
} from '../../heatmap';

describe('weekTextsSelector test.', () => {
  test('get: should call useCase.', () => {
    const weekTexts = ['test'];
    const mockFn = jest.fn().mockReturnValue(weekTexts);
    const dateUseCase = { getWeekTexts: mockFn };

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      // @ts-ignore
      set(dateUseCaseAtom, dateUseCase);
    });

    const value = testSnapshot.getLoadable(weekTextsSelector).getValue();

    expect(value).toMatchObject(weekTexts);
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0].length).toBe(0);
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
    const mockFn = jest.fn().mockReturnValue(heatMapCalendar);
    const dateUseCase = { getHeatMapCalendar: mockFn };

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      // @ts-ignore
      set(dateUseCaseAtom, dateUseCase);
      set(selectedYearAtom, year);
    });

    const value = testSnapshot.getLoadable(heatMapCalendarSelector).getValue();

    expect(value).toMatchObject(heatMapCalendar);
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(year);
  });
});

describe('tooltipDiaryEntrySelector test.', () => {
  test('get: should call diaryEntrySelector', () => {
    const date = '2021-01-01';
    const diaryEntry = {};
    const diary: any[] = [];
    const mockFn = jest.fn().mockReturnValue(diaryEntry);
    const diaryUseCase = { findDiaryEntryFromDiaryByDate: mockFn };

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      // @ts-ignore
      set(diaryUseCaseAtom, diaryUseCase);
      set(tooltipDateAtom, date);
      set(diaryAtom, diary);
    });

    const value = testSnapshot
      .getLoadable(tooltipDiaryEntrySelector)
      .getValue();

    expect(value).toMatchObject(diaryEntry);
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(diary);
    expect(mockFn.mock.calls[0][1]).toBe(date);
  });
});
