import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Item = styled.div`
  ${({ theme }) => [
    mixins.smallPadding(theme),
    mixins.fontMainColor(theme),
    mixins.pointer(),
    mixins.fontHoverColor(theme),
  ]}
  display: flex;
  align-items: center;
`;
