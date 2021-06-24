import { styled } from '@/styles';
import {
  boxCss,
  boxHoverCss,
  fontWrapCss,
  pointerCss,
  smallMarginLeftCss,
  smallMarginTopCss,
  resetFirstItemMarginCss,
} from '@/styles/mixins';

export const CurrentInfo = styled.div``;

export const TagContent = styled.div`
  display: flex;
`;

export const TagWrapper = styled.div`
  ${({ theme }) => [smallMarginLeftCss(theme), resetFirstItemMarginCss()]}
`;

export const ContentTextWrapper = styled.div`
  ${({ theme }) => smallMarginTopCss(theme)}
`;

export const ContentText = styled.div`
  ${({ theme }) => [
    boxCss(theme),
    boxHoverCss(theme),
    fontWrapCss(),
    pointerCss(),
  ]}
`;
