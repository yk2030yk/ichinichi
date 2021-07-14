import React from 'react';
import { ObjectiveGoal } from '@/useCase/viewModels/objective';

import { Card } from '@/presenter/core/ui/Card';
import { DoneIcon, PinIcon } from '@/presenter/core/atoms/icons';
import * as S from './styled';

type Props = {
  objectiveGoal: ObjectiveGoal;
};

export const GoalCard: React.FC<Props> = ({ objectiveGoal }) => {
  return (
    <Card>
      <S.CardTop>
        <S.CardIconWrapper>
          <PinIcon size={14} />
        </S.CardIconWrapper>
      </S.CardTop>
      <S.CardContent>{objectiveGoal.title}</S.CardContent>
    </Card>
  );
};
