import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div``;

export const TagLayoutWrapper = styled.div`
  ${({ theme }) => [mixins.input({ theme })]}
`;
