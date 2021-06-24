import { styled, css, Theme } from '@/styles';
import {
  cancelButtonCss,
  okButtonCss,
  boxBorderRadiusCss,
  boxShadowCss,
  fontLargeSizeCss,
  fontLightColorCss,
  middlePaddingCss,
  middleMarginTopCss,
  smallMarginLeftCss,
} from '@/styles/mixins';

const modalBackGroundColorCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.transparent};
`;

const modalContentColorCss = (theme: Theme) => css`
  background-color: ${theme.palette.background?.main};
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #aaaaaa65;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => [modalBackGroundColorCss(theme)]}
`;

export const ConfirmMessage = styled.div`
  ${({ theme }) => [fontLargeSizeCss(theme), fontLightColorCss(theme)]}
`;

export const ConfirmContent = styled.div`
  width: 400px;
  ${({ theme }) => [
    modalContentColorCss(theme),
    boxBorderRadiusCss(theme),
    boxShadowCss(theme),
    middlePaddingCss(theme),
  ]}
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const ButtonArea = styled.div`
  ${({ theme }) => [middleMarginTopCss(theme)]}
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  ${({ theme }) => [cancelButtonCss(theme)]}
  width: 80px;
`;

export const OkButton = styled.button`
  ${({ theme }) => [okButtonCss(theme), smallMarginLeftCss(theme)]}
  width: 80px;
`;
