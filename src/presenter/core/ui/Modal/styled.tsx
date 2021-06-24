import { styled, css, Theme } from '@/styles';
import {
  fontMainColorCss,
  fontLargeSizeCss,
  fontHoverColorCss,
  boxBorderBottomCss,
  boxBorderRadiusCss,
  boxShadowCss,
  middlePaddingCss,
  pointerCss,
  fontDarkColorCss,
} from '@/styles/mixins';

const modalBackGroundColorCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.transparent};
`;

const modalContentColorCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
`;

export const Background = styled.div`
  ${({ theme }) => [modalBackGroundColorCss(theme)]}
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
    modalContentColorCss(theme),
    boxBorderRadiusCss(theme),
    boxShadowCss(theme),
  ]}
  width: 700px;
  height: 80%;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  ${({ theme }) => [boxBorderBottomCss(theme), middlePaddingCss(theme)]}
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.p`
  ${({ theme }) => [fontMainColorCss(theme), fontLargeSizeCss(theme)]}
`;

export const ModalCloseButton = styled.div`
  ${({ theme }) => [
    fontDarkColorCss(theme),
    fontLargeSizeCss(theme),
    fontHoverColorCss(theme),
    pointerCss(),
  ]}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContentMain = styled.div`
  ${({ theme }) => [middlePaddingCss(theme)]}
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
