import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => [mixins.middlePadding(theme)]}
`;

export const Link = styled.div`
  width: 100%;
  ${({ theme }) => [
    mixins.fontHoverColor(theme),
    mixins.smallPadding(theme),
    mixins.pointer(),
    mixins.fontDarkColor(theme),
  ]}
`;
