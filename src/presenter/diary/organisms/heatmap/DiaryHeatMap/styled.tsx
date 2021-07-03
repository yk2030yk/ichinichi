import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const HeatMap = styled.div`
  ${({ theme }) => mixins.box(theme)}
  ${({ theme }) => mixins.boxBorder(theme)}
  ${({ theme }) => mixins.middlePadding(theme)}
  ${({ theme }) => [mixins.width100Per(), mixins.fontSmallSize(theme)]}
  overflow-x: scroll;
`;

export const HeatMapTitle = styled.div`
  ${({ theme }) => mixins.fontMainSize(theme)}
`;

export const HeatMapHeader = styled.div``;

export const HeatMapContent = styled.div`
  ${({ theme }) => mixins.smallMarginTop(theme)}
`;

export const HeatMapGraph = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 11px);
  grid-gap: 3px;
`;
