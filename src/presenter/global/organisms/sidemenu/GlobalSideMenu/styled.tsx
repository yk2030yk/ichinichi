import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => mixins.smallPadding(theme)}
  width: 100%;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
