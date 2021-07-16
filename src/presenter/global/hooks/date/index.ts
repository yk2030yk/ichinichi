import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { reloadTodayAtom, todaySelector } from '../../state/date';

export const useReloadToday = () => {
  const setReloadToday = useSetRecoilState(reloadTodayAtom);

  useEffect(() => {
    setReloadToday((pre) => pre + 1);
  }, []);
};

export const useToday = () => useRecoilValue(todaySelector);
