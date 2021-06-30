import { SnackbarType } from '@/presenter/global/state/snackbar';
import { styled, Theme, css } from '@/styles';
import { mixins } from '@/styles/mixins';

const getPaletteBySnackbarType = (theme: Theme, snackbarType: SnackbarType) => {
  switch (snackbarType) {
    case 'INFO':
      return theme.palette.info;
    case 'ERROR':
      return theme.palette.error;
    case 'SUCCESS':
      return theme.palette.success;
    default:
      return theme.palette.primary;
  }
};

const snackbarStyle = (theme: Theme, snackbarType: SnackbarType) => {
  const palette = getPaletteBySnackbarType(theme, snackbarType);
  return css`
    background-color: ${palette?.main};
    color: ${palette?.text};
  `;
};

export const Snackbar = styled.div<{ snackbarType: SnackbarType }>`
  ${({ theme, snackbarType }) => [
    snackbarStyle(theme, snackbarType),
    mixins.fontSmallSize(theme),
    mixins.smallPadding(theme),
    mixins.boxShadow(theme),
    mixins.boxBorderRadius(theme),
    mixins.size({ w: '250px' }),
    mixins.position({ b: '30px', l: '50%' }),
  ]}
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SnackbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SnackbarRight = styled.div`
  ${() => mixins.pointer()}
  display: flex;
  align-items: center;
`;

export const Message = styled.div`
  ${({ theme }) => mixins.smallMarginLeft(theme)}
`;
