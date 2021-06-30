import { styled, css, Theme } from '@/styles';
import { mixins } from '@/styles/mixins';

const modalBackGroundColor = (theme: Theme) => css`
  background-color: ${theme.palette.background?.transparent};
`;

const modalContentColor = (theme: Theme) => css`
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
  ${({ theme }) => [modalBackGroundColor(theme)]}
`;

export const ConfirmMessage = styled.div`
  ${({ theme }) => [mixins.fontLargeSize(theme), mixins.fontLightColor(theme)]}
`;

export const ConfirmContent = styled.div`
  width: 400px;
  ${({ theme }) => [
    modalContentColor(theme),
    mixins.boxBorderRadius(theme),
    mixins.boxShadow(theme),
    mixins.middlePadding(theme),
  ]}
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const ButtonArea = styled.div`
  ${({ theme }) => [mixins.middleMarginTop(theme)]}
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  ${({ theme }) => [mixins.cancelButton(theme)]}
  width: 80px;
`;

export const OkButton = styled.button`
  ${({ theme }) => [mixins.okButton(theme), mixins.smallMarginLeft(theme)]}
  width: 80px;
`;
