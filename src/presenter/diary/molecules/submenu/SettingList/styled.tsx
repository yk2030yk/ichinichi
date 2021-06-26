import { styled } from '@/styles';
import {
  fontHoverColorCss,
  middlePaddingCss,
  smallPaddingCss,
  pointerCss,
  fontDarkColorCss,
} from '@/styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
  ${({ theme }) => [middlePaddingCss(theme)]}
`;

export const Link = styled.div`
  width: 100%;
  ${({ theme }) => [
    fontHoverColorCss(theme),
    smallPaddingCss(theme),
    pointerCss(),
    fontDarkColorCss(theme),
  ]}
`;
