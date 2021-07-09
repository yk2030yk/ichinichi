import { diaryUseCaseAtom } from '@/presenter/global/state/dependency/diary';
import { getDiaryUseCaseMock } from '@/useCase/mocks/services/diary';
import { snapshot_UNSTABLE } from 'recoil';
import { diaryAtom, diaryEntrySelector } from '../../diary';

describe('diaryEntrySelector test.', () => {
  test('get: should call useCase.', () => {
    const date = '2021-01-02';
    const diaryEntry = {};
    const diary: any[] = [];

    const findDiaryEntryFromDiaryByDateMock = jest
      .fn()
      .mockReturnValue(diaryEntry);
    const diaryUseCase = getDiaryUseCaseMock();
    diaryUseCase.findDiaryEntryFromDiaryByDate = findDiaryEntryFromDiaryByDateMock;

    const testSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(diaryUseCaseAtom, diaryUseCase);
      set(diaryAtom, diary);
    });

    const value = testSnapshot.getLoadable(diaryEntrySelector(date)).getValue();

    expect(value).toMatchObject(diaryEntry);
    expect(findDiaryEntryFromDiaryByDateMock.mock.calls.length).toBe(1);
    expect(findDiaryEntryFromDiaryByDateMock.mock.calls[0][0]).toBe(diary);
    expect(findDiaryEntryFromDiaryByDateMock.mock.calls[0][1]).toBe(date);
  });
});
