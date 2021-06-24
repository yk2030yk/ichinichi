import { styled } from '@/styles';
import {
  okButtonCss,
  cancelButtonCss,
  smallMarginLeftCss,
  resetFirstItemMarginCss,
} from '@/styles/mixins';

export const EditActions = styled.div`
  display: flex;
`;

export const EditAction = styled.div`
  ${({ theme }) => [smallMarginLeftCss(theme), resetFirstItemMarginCss()]}
`;

export const SaveButton = styled.button`
  ${({ theme }) => okButtonCss(theme)}
  width: 80px;
`;

export const CancelButton = styled.button`
  ${({ theme }) => cancelButtonCss(theme)}
  width: 80px;
`;
