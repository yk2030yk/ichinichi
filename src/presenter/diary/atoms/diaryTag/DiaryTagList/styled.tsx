import { styled } from '@/styles';
import { smallMarginLeftCss, resetFirstItemMarginCss } from '@/styles/mixins';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagWrapper = styled.div`
  ${({ theme }) => [smallMarginLeftCss(theme), resetFirstItemMarginCss()]}
`;
