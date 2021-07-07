import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const CurrentInfo = styled.div``;

export const TagContent = styled.div`
  display: flex;
`;

export const TagWrapper = styled.div`
  ${({ theme }) => [
    mixins.smallMarginLeft({ theme }),
    mixins.resetFirstItemMargin(),
  ]}
`;

export const ContentTextWrapper = styled.div`
  ${({ theme }) => mixins.smallMarginTop({ theme })}
`;

export const ContentText = styled.div`
  ${({ theme }) => [
    mixins.box({ theme }),
    mixins.boxHover({ theme }),
    mixins.fontWrap(),
    mixins.pointer(),
  ]}
`;
