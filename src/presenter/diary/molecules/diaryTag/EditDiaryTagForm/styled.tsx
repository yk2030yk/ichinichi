import { styled } from '@/styles';
import {
  inputCss,
  okButtonCss,
  resetFirstItemMarginCss,
  smallMarginLeftCss,
  smallMarginTopCss,
} from '@/styles/mixins';

export const Input = styled.input`
  ${({ theme }) => inputCss(theme)}
  width: 200px;
`;

export const ButtonWrapper = styled.button`
  ${({ theme }) => smallMarginLeftCss(theme)}
`;

export const Button = styled.button`
  ${({ theme }) => okButtonCss(theme)}
  width: 80px;
`;

export const TagPreviewWrapper = styled.div``;

export const TagWrapper = styled.div`
  width: 200px;
`;

export const TagForm = styled.div`
  display: grid;
`;

export const TagFormItem = styled.div`
  ${({ theme }) => [smallMarginTopCss(theme), resetFirstItemMarginCss()]}
`;
