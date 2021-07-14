import { useRecoilValue } from 'recoil';
import { pickedGoalsSelectors } from '../../state/objective';

export const usePickedGoals = () => useRecoilValue(pickedGoalsSelectors);
