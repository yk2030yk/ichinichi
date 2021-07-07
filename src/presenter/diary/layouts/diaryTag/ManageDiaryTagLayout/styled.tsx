import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middlePadding({ theme })]}
  max-width: 900px;
`;
