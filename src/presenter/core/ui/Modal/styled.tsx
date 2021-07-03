import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';
import { mergeMixins } from '@/styles/utils';

export const Background = styled.div`
  ${mergeMixins([
    mixins.width100Per,
    mixins.height100Per,
    mixins.backgroundColorTransparent,
  ])}
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  ${mergeMixins([
    mixins.backgroundColorMain,
    mixins.boxBorderRadius,
    mixins.boxShadow,
  ])}
  ${[mixins.width(700), mixins.height(500)]}
`;

export const ModalHeader = styled.div`
  ${mergeMixins([
    mixins.width100Per,
    mixins.boxBorderBottom,
    mixins.middlePadding,
  ])}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.p`
  ${mergeMixins([mixins.fontMainColor, mixins.fontLargeSize])}
`;

export const ModalCloseButton = styled.div`
  ${mergeMixins([
    mixins.fontDarkColor,
    mixins.fontLargeSize,
    mixins.fontHoverColor,
    mixins.pointer,
  ])}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentMain = styled.div`
  ${mergeMixins([
    mixins.width100Per,
    mixins.height100Per,
    mixins.middlePadding,
  ])}
  overflow-y: scroll;
`;
