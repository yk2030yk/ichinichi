import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const TagListArea = styled.div`
  ${({ theme }) => [
    mixins.boxBorderRadius(theme),
    mixins.middlePadding(theme),
    mixins.boxBorder(theme),
  ]}
`;
