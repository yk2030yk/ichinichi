import { useEffect, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDiaryUseCase } from '@/presenter/global/hooks/dependency';
import { userIdAtom } from '@/presenter/global/state/auth';
import { selectedYearAtom, diaryAtom } from '../../state/diary';

export const useLoadDiary = () => {
  const diaryUseCase = useDiaryUseCase();
  const userId = useRecoilValue(userIdAtom);
  const year = useRecoilValue(selectedYearAtom);
  const setDiary = useSetRecoilState(diaryAtom);

  const load = useCallback(async () => {
    if (!year) return;
    setDiary(await diaryUseCase.findDiaryByYear(userId, year));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, year, diaryUseCase]);

  useEffect(() => {
    load();
  }, [load]);
};
