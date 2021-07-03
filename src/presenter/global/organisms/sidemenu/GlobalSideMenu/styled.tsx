import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.smallPadding(theme)]}
`;

export const MenuItem = styled.div`
  ${() => [mixins.width100Per()]}
  display: flex;
  justify-content: center;
`;
