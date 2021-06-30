import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [mixins.middlePadding(theme)]}
  width: 100%;
  max-width: 900px;
`;
