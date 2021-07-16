import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { reloadTimelineCalendarAtom } from '../../state/timeline';

export const useReloadTimelineCalendar = () => {
  const setReloadTimelineCalendarAtom = useSetRecoilState(
    reloadTimelineCalendarAtom
  );

  useEffect(() => {
    setReloadTimelineCalendarAtom((pre) => pre + 1);
  }, []);
};
