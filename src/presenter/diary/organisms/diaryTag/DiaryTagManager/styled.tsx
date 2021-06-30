import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TagListArea = styled.div`
  ${({ theme }) => [mixins.middleMarginTop(theme)]}
`;
