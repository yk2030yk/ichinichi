import { css } from '@/styles';
import { mixins } from '@/styles/mixins';
import { styledDiv, styledP } from '@/styles/utils';

export const Background = styledDiv([
  mixins.width100Per,
  mixins.height100Per,
  mixins.backgroundColorTransparent,
  css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
]);

export const ModalContent = styledDiv([
  mixins.backgroundColorMain,
  mixins.boxBorderRadius,
  mixins.boxShadow,
  mixins.width(700),
  mixins.height(500),
]);

export const ModalHeader = styledDiv([
  mixins.width100Per,
  mixins.boxBorderBottom,
  mixins.middlePadding,
  css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
]);

export const ModalTitle = styledP([mixins.fontMainColor, mixins.fontLargeSize]);

export const ModalCloseButton = styledDiv([
  mixins.fontDarkColor,
  mixins.fontLargeSize,
  mixins.fontHoverColor,
  mixins.pointer,
  css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
]);

export const ModalContentMain = styledDiv([
  mixins.width100Per,
  mixins.height100Per,
  mixins.middlePadding,
  css`
    overflow-y: scroll;
  `,
]);
