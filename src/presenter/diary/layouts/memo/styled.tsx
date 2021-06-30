import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const ContentWrapper = styled.div`
  ${({ theme }) => [mixins.middlePadding(theme)]}
  width: 100%;
`;

export const ContentTop = styled.div`
  width: 100%;
`;

export const ContentMiddle = styled.div`
  width: 100%;
  ${({ theme }) => [mixins.middleMarginTop(theme)]}
`;
