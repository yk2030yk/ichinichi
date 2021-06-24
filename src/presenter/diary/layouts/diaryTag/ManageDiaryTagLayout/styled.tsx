import { styled } from '@/styles';
import { middlePaddingCss } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [middlePaddingCss(theme)]}
  width: 100%;
`;
