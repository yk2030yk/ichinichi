import { styled, css, Theme } from '@/styles';
import { mixins } from '@/styles/mixins';

const modalBackGroundColor = (theme: Theme) => css`
  background-color: ${theme.palette.background?.transparent};
`;

const modalContentColor = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
`;

export const Background = styled.div`
  ${({ theme }) => [modalBackGroundColor(theme)]}
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  ${({ theme }) => [
    modalContentColor(theme),
    mixins.boxBorderRadius(theme),
    mixins.boxShadow(theme),
  ]}
  width: 700px;
  height: 80%;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  ${({ theme }) => [mixins.boxBorderBottom(theme), mixins.middlePadding(theme)]}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.p`
  ${({ theme }) => [mixins.fontMainColor(theme), mixins.fontLargeSize(theme)]}
`;

export const ModalCloseButton = styled.div`
  ${({ theme }) => [
    mixins.fontDarkColor(theme),
    mixins.fontLargeSize(theme),
    mixins.fontHoverColor(theme),
    mixins.pointer(),
  ]}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentMain = styled.div`
  ${({ theme }) => [mixins.middlePadding(theme)]}
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
