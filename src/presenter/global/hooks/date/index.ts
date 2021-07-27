import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reloadTodayAtom, todaySelector } from '../../state/date';

export const useReloadToday = () => {
  const setReloadToday = useSetRecoilState(reloadTodayAtom);

  useEffect(() => {
    setReloadToday((pre) => pre + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useToday = () => useRecoilValue(todaySelector);
