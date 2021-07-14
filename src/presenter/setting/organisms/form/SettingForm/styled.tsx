import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${() => [mixins.width100Per()]}
`;
