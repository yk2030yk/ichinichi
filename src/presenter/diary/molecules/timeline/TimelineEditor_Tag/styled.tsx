import { styled } from '@/styles';
import { inputCss } from '@/styles/mixins';

export const Wrapper = styled.div``;

export const TagLayoutWrapper = styled.div`
  ${({ theme }) => [inputCss(theme)]}
`;
