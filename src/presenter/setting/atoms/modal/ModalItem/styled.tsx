import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const ModalItem = styled.div`
  ${mergeMixins([mixins.middlePadding, mixins.boxBorderBottom])}
`;

export const ModalItemContent = styled.div`
  ${mergeMixins([mixins.middleMarginTop])}
`;

export const ModalItemTitle = styled.div`
  ${mergeMixins([
    mixins.fontMainColor,
    mixins.fontMainSize,
    mixins.fontWeightBold,
  ])}
`;
