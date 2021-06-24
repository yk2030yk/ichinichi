import { styled } from '@/styles';
import {
  fontHoverColorCss,
  fontMainColorCss,
  pointerCss,
  smallPaddingCss,
} from '@/styles/mixins';

export const Item = styled.div`
  ${({ theme }) => [
    smallPaddingCss(theme),
    fontMainColorCss(theme),
    pointerCss(),
    fontHoverColorCss(theme),
  ]}
  display: flex;
  align-items: center;
`;
