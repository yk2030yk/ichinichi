import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagWrapper = styled.div`
  ${({ theme }) => [
    mixins.smallMarginLeft({ theme }),
    mixins.resetFirstItemMargin(),
  ]}
`;
