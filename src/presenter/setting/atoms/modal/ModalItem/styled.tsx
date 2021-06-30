import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const ModalItem = styled.div`
  ${({ theme }) => [mixins.middlePadding(theme), mixins.boxBorderBottom(theme)]}
`;

export const ModalItemContent = styled.div`
  ${({ theme }) => mixins.middleMarginTop(theme)}
`;

export const ModalItemTitle = styled.div`
  ${({ theme }) => [
    mixins.fontMainColor(theme),
    mixins.fontMainSize(theme),
    mixins.fontWeightBold(theme),
  ]}
`;
