import { useRecoilValue } from 'recoil';
import { todaySelector } from '../../state/date';

export const useToday = () => useRecoilValue(todaySelector);
