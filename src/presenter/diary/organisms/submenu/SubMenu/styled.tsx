import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${() => [mixins.width100Per()]}
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
