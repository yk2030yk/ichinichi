import { styled } from '@/styles';
import { middleMarginTopCss } from '@/styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TagListArea = styled.div`
  ${({ theme }) => [middleMarginTopCss(theme)]}
`;
