import { styled } from '@/styles';
import {
  boxBorderCss,
  boxCss,
  middlePaddingCss,
  smallMarginTopCss,
  fontSmallSizeCss,
  fontMainSizeCss,
} from '@/styles/mixins';

export const HeatMap = styled.div`
  ${({ theme }) => boxCss(theme)}
  ${({ theme }) => boxBorderCss(theme)}
  ${({ theme }) => middlePaddingCss(theme)}
  ${({ theme }) => fontSmallSizeCss(theme)}
  width: 100%;
`;

export const HeatMapTitle = styled.div`
  ${({ theme }) => fontMainSizeCss(theme)}
`;

export const HeatMapHeader = styled.div``;

export const HeatMapContent = styled.div`
  ${({ theme }) => smallMarginTopCss(theme)}
`;

export const HeatMapGraph = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 13px);
  grid-gap: 4px;
`;
