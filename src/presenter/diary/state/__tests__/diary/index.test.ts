import { diaryUseCaseAtom } from '@/presenter/global/state/dependency/diary';
import { snapshot_UNSTABLE } from 'recoil';
import { diaryAtom, diaryEntrySelector } from '../../diary';

describe('diaryEntrySelector test.', () => {
  test('get: should call useCase.', () => {
    const date = '2021-01-02';
    const diaryEntry = {};
    const diary: any[] = [];
    const mockFn = jest.fn().mockReturnValue(diaryEntry);
    const diaryUseCase = { findDiaryEntryFromDiaryByDate: mockFn };

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      // @ts-ignore
      set(diaryUseCaseAtom, diaryUseCase);
      set(diaryAtom, diary);
    });

    const value = testSnapshot.getLoadable(diaryEntrySelector(date)).getValue();

    expect(value).toMatchObject(diaryEntry);
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe(diary);
    expect(mockFn.mock.calls[0][1]).toBe(date);
  });
});
