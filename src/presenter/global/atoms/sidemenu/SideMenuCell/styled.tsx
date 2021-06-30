import { styled } from '@/styles';
import { mixins } from '@/styles/mixins';

export const Cell = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => {
    const size = '40px';
    return [
      mixins.size({ w: size, h: size }),
      mixins.fontDarkColor(theme),
      selected ? mixins.fontLightColor(theme) : mixins.fontHoverColor(theme),
      mixins.pointer(),
    ];
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;
