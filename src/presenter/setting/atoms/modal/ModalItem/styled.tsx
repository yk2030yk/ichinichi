import { styled } from '@/styles';
import {
  fontMainColorCss,
  fontMainSizeCss,
  fontWeightBoldCss,
  middleMarginTopCss,
  boxBorderBottomCss,
  middlePaddingCss,
} from '@/styles/mixins';

export const ModalItem = styled.div`
  ${({ theme }) => [middlePaddingCss(theme), boxBorderBottomCss(theme)]}
`;

export const ModalItemContent = styled.div`
  ${({ theme }) => middleMarginTopCss(theme)}
`;

export const ModalItemTitle = styled.div`
  ${({ theme }) => [
    fontMainColorCss(theme),
    fontMainSizeCss(theme),
    fontWeightBoldCss(theme),
  ]}
`;
