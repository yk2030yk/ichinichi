import { styled } from '@/styles';
import { middleMarginTopCss, middlePaddingCss } from '@/styles/mixins';

export const ContentWrapper = styled.div`
  ${({ theme }) => [middlePaddingCss(theme)]}
  width: 100%;
`;

export const ContentTop = styled.div`
  width: 100%;
`;

export const ContentMiddle = styled.div`
  width: 100%;
  ${({ theme }) => [middleMarginTopCss(theme)]}
`;
