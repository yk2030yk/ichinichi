import { atom } from 'recoil';

export const todayAtom = atom<Date>({
  key: 'heatMap/atom/tooltipState',
  default: new Date(),
});
