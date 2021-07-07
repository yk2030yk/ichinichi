import { styled, Theme, css } from '@/styles';
import { mixins } from '@/styles/mixins';

const calcCellColor = ({
  theme,
  textCount,
  isToday,
  hasDate,
}: {
  theme: Theme;
  textCount: number;
  isToday: boolean;
  hasDate: boolean;
}) => {
  if (!hasDate) return theme.palette.background?.main;
  if (isToday) return theme.palette.primary?.main;
  if (textCount > 200) return theme.palette.gradations.green.g5;
  if (textCount > 150) return theme.palette.gradations.green.g4;
  if (textCount > 100) return theme.palette.gradations.green.g3;
  if (textCount > 50) return theme.palette.gradations.green.g2;
  if (textCount > 0) return theme.palette.gradations.green.g1;
  return theme.palette.background?.light;
};

const cellColor = ({
  theme,
  textCount,
  isToday,
  hasDate,
}: {
  theme: Theme;
  textCount: number;
  isToday: boolean;
  hasDate: boolean;
}) => css`
  background-color: ${calcCellColor({ theme, textCount, isToday, hasDate })};
`;

export const Col = styled.div<{
  hasDate: boolean;
  isToday: boolean;
  textCount: number;
  size?: string;
}>`
  ${({ theme, textCount, isToday, hasDate, size = '11px' }) => [
    mixins.size({ w: size, h: size }),
    cellColor({ theme, textCount, isToday, hasDate }),
    mixins.boxBorderRadius({ theme }),
  ]}
`;
