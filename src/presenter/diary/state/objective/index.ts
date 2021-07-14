import { atom, selector } from 'recoil';

import { ObjectiveGoal } from '@/useCase/viewModels/objective';

export const goalsAtom = atom<ObjectiveGoal[]>({
  key: 'objective/atom/goals',
  default: [
    {
      title: 'チーム会で発表する1',
      picked: true,
      limit: '2020/01/02',
      done: true,
    },
    {
      title: 'チーム会で発表する2',
      picked: true,
      limit: '2020/01/02',
      done: true,
    },
    {
      title: 'チーム会で発表する3',
      picked: true,
      limit: '2020/01/02',
      done: true,
    },

    {
      title: 'チーム会で発表する4',
      picked: true,
      limit: '2020/01/02',
      done: true,
    },
    {
      title: 'チーム会で発表する5',
      picked: true,
      limit: '2020/01/02',
      done: true,
    },
  ],
});

export const pickedGoalsSelectors = selector({
  key: 'objective/selectors/pickedGoals',
  get: ({ get }) => {
    const goals = get(goalsAtom);
    return goals.filter((v) => v.picked);
  },
});
