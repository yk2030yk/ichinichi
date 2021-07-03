import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  ${({ theme }) => [mixins.width100Per(), mixins.middlePadding(theme)]}
`;

export const Link = styled.div`
  ${({ theme }) => [
    mixins.width100Per(),
    mixins.fontHoverColor(theme),
    mixins.smallPadding(theme),
    mixins.pointer(),
    mixins.fontDarkColor(theme),
  ]}
`;
