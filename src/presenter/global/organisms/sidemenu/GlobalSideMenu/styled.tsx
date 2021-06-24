import { styled } from '@/styles';
import { smallPaddingCss } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => smallPaddingCss(theme)}
  width: 100%;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
