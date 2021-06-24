import { styled } from '@/styles';
import {
  fontHoverColorCss,
  pointerCss,
  fontDarkColorCss,
  fontLightColorCss,
  sizeCss,
} from '@/styles/mixins';

export const Cell = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => {
    const size = '40px';
    return [
      sizeCss({ w: size, h: size }),
      fontDarkColorCss(theme),
      selected ? fontLightColorCss(theme) : fontHoverColorCss(theme),
      pointerCss(),
    ];
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;
