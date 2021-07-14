import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv } from '@/styles/utils';

export const ContentWrapper = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middlePadding({ theme })]}
`;

export const ContentTop = styled.div`
  ${() => [mixins.width100Per()]}
`;

export const ContentMiddle = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middleMarginTop({ theme })]}
`;

export const PickedGoalCardListArea = styledDiv([mixins.width100Per]);

export const DiaryHeatMapArea = styledDiv([
  mixins.width100Per,
  mixins.middleMarginTop,
]);
