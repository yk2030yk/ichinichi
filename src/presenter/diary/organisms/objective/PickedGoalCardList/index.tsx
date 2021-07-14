import React from 'react';

import { usePickedGoals } from '@/presenter/diary/hooks/objective';
import { GoalCard } from '@/presenter/diary/molecules/objective/GoalCard';

import * as S from './styled';

export const PickedGoalCardList: React.FC = () => {
  const pickedGoals = usePickedGoals();
  return (
    <S.CardList>
      {pickedGoals.map((goal) => (
        <S.CardWrapper key={goal.title}>
          <GoalCard objectiveGoal={goal} />
        </S.CardWrapper>
      ))}
    </S.CardList>
  );
};
